import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {
  
};

function TodoFeature() {
  // let { path, url } = useRouteMatch();
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} component={ListPage}/>
    </Switch>
  );
}

export default TodoFeature;