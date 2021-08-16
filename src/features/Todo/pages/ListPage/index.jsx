import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../component/TodoForm';
import TodoList from '../../component/TodoList';

ListPage.propTypes = {
  
};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const {path} = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList)
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search)
    return params.status || 'all'
  })

  useEffect(() => {
    const params = queryString.parse(location.search)
    setFilterStatus(params.status || 'all')
  }, [location.search])

  const handleTodoClick = (todo, index) => {
    const newTodoList = [
      ...todoList.slice(0, index),
      {
        ...todo,
        status: todo.status === 'completed' ? 'new' : 'completed'
      },
      ...todoList.slice(index + 1)
    ]
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    // setFilterStatus('all')
    const queryParams = {status: 'all'}
    history.push({
      pathname: path,
      search: queryString.stringify(queryParams)
    });
  }

  const handleShowCompletedClick = () => {
    // setFilterStatus('completed')
    const queryParams = {status: 'completed'}
    history.push({
      pathname: path,
      search: queryString.stringify(queryParams)
    });
  }

  const handleShowNewClick = () => {
    // setFilterStatus('new')
    const queryParams = {status: 'new'}
    history.push({
      pathname: path,
      search: queryString.stringify(queryParams)
    });
  }

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === 'all' || todo.status === filterStatus)
  }, [todoList, filterStatus]) 

  const handleFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new'
    }
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList)
  }

  return (
    <div>
      <TodoForm onSubmit={handleFormSubmit}/>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;