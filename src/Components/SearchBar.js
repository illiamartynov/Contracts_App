import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import styles from '../Styles/SearchBar.module.css';

const SearchBar = observer(({ store }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('number');

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    store.setSearchQuery(e.target.value, searchCategory);
  };

  const handleSearchCategoryChange = (e) => {
    setSearchCategory(e.target.value);
    store.setSearchQuery(searchQuery, e.target.value);
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSearchCategory('number');
    store.resetSearch();
  };

  return (
    <div className={styles.searchBar}>
      <FormControl className={styles.formControl}>
        <InputLabel
          sx={{ top: '-10%' }} 
        >
          Search By
        </InputLabel>
        <Select
          value={searchCategory}
          onChange={handleSearchCategoryChange}
          className={styles.select}
        >
          <MenuItem value="number">Contract Number</MenuItem>
          <MenuItem value="amount">Amount</MenuItem>
          <MenuItem value="manager">Manager Name</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label={`Search by ${searchCategory}`}
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        className={styles.textField}
      />
      <Button variant="contained" onClick={resetSearch} className={styles.button}>
        Reset
      </Button>
    </div>
  );
});

export default SearchBar;
