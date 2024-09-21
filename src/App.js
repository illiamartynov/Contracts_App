import React from 'react';
import { observer } from 'mobx-react';
import { Grid } from '@mui/material';
import ContractsTable from './Components/ContractsTable';
import ContractDetails from './Components/ContractDetails';
import SearchBar from './Components/SearchBar';
import ContractsStore from './Stores/ContractsStore';
import './App.css';

const App = observer(() => {
  return (
    <Grid container spacing={2} className="app-container">
      <Grid item xs={12}>
        <h1>Contract Management</h1>
      </Grid>

      <Grid item xs={12}>
        <SearchBar store={ContractsStore} />
      </Grid>

      <Grid item xs={12}>
        <ContractsTable store={ContractsStore} />
      </Grid>

      <ContractDetails store={ContractsStore} />
    </Grid>
  );
});

export default App;
