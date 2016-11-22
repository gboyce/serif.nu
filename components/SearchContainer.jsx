import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Search from './Search.jsx';

const style = {
  searchGroup: {
    margin: 'auto',
    width: 300
  },
  icon: {
    verticalAlign: 'middle'
  }
};

const SearchContainer = () => (
  <div style={style.searchGroup}>
    <FontIcon style={style.icon} className="material-icons">search</FontIcon>
    <Search searchdata={['hello', 'hi', 'hey']} />
  </div>
);

export default SearchContainer;