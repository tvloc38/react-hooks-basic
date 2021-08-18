import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {},

  left: {
    width: '250px'
  },

  right: {
    flex: '1 1 0'
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    paddingBottom: 30
  }
}))

ListPage.propTypes = {

};

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 10
  })
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9
  })
  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page
    }))
  }

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Error fetch: ', error)
      }
      setIsLoading(false);
    })()
  }, [filters]);

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {isLoading ? <ProductSkeletonList /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;