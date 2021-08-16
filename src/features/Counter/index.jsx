import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
  
};

function CounterFeature(props) {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count);
  const handleIncreaseButton = () => {
    const action = increase();
    dispatch(action)
  }
  const handleDecreaseButton = () => {
    const action = decrease();
    dispatch(action)
  } 
  return (
    <div>
      Counter : {count}
    
    <div>
      <button onClick={handleIncreaseButton}>Increase</button>
      <button onClick={handleDecreaseButton}>Decrease</button>
    </div>
    </div>
  );
}
export default CounterFeature;