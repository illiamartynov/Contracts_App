import React from 'react';
import { observer } from 'mobx-react';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';

const StatusChanger = observer(({ contract }) => {
  const handleStatusChange = (e) => {
    contract.status = e.target.value;
  };

  const updateContractStatus = async (contractId, newStatus) => {
    try {
      const response = await axios.post('https://api.example.com/contracts/update-status', {
        contractId: contractId,
        status: newStatus
      });
  
      console.log('Status updated:', response.data);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <Select value={contract.status} onChange={handleStatusChange}>
      <MenuItem value="Создан">Создан</MenuItem>
      <MenuItem value="В процессе">В процессе</MenuItem>
      <MenuItem value="Оплата">Оплата</MenuItem>
      <MenuItem value="Закрыт">Закрыт</MenuItem>
    </Select>
  );
});

export default StatusChanger;
