import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};


function ProductSort({ currentSort, onChange }) {
  const handleChange = (e, newValue) => {
    onChange && onChange(newValue)
  }
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Gia thấp đến cao" value="salePrice:ASC" />
      <Tab label="Gia cao đến thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;