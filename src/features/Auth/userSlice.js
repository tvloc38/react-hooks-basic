import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    // call API to register
    const user = await userApi.register(payload)
    const data = user.data
    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    return data.user;
  }
)

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    // call API to register
    const user = await userApi.login(payload)
    const data = user.data
    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    return data.user;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {}
  },
  reducers: {
    logout(state) {
      //clear localstorage
      localStorage.removeItem(StorageKeys.TOKEN)
      localStorage.removeItem(StorageKeys.USER)

      state.current = {}
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    }
  }
});

const { actions, reducer } = userSlice;
export const { logout } = actions
export default reducer;