import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@material-ui/core';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log(match)
  return (
    <Box pt={5}>
      <Switch>
        <Route path={match.url} component={ListPage} exact />
      </Switch>
    </Box>
  );
}

export default ProductFeature;