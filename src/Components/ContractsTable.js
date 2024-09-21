import React from 'react';
import { observer } from 'mobx-react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, useMediaQuery } from '@mui/material';
import StatusChanger from './StatusChanger';
import styles from '../Styles/ContractsTable.module.css';
import { formatNumberWithSpaces } from "../Utils/formatters";

const ContractsTable = observer(({ store }) => {
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const filteredContracts = store.contracts.filter(contract => {
    const { searchQuery, searchCategory } = store;

    if (searchCategory === 'amount') {
      return contract.amountWithoutNDS !== undefined && contract.amountWithoutNDS.toString().includes(searchQuery);
    }

    return contract[searchCategory]?.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell>Contract Number</TableCell>
          {!isMobile && <TableCell>Client Name</TableCell>} 
          <TableCell>Manager</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Amount (without VAT)</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredContracts.map((contract) => (
          <TableRow key={contract.id}>
            {console.log(contract.status)}

            <TableCell>{contract.number}</TableCell>
            {!isMobile && <TableCell>{contract.clientName}</TableCell>}  
            <TableCell>{contract.manager}</TableCell>
            <TableCell>
              <StatusChanger contract={contract} />
            </TableCell>
            <TableCell>{formatNumberWithSpaces(contract.amountWithoutNDS)}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => store.viewContract(contract.id)}
              >
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});

export default ContractsTable;
