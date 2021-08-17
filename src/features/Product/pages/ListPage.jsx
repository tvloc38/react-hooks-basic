import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},

  left: {
    width: '250px'
  },

  right: {
    flex: '1 1 auto'
  }
}))

ListPage.propTypes = {

};

function ListPage(props) {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>Right</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;