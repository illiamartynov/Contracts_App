import { makeAutoObservable, computed } from 'mobx';
import ContractsService from '../Services/ContractsService';

class ContractsStore {
  contracts = [];
  searchQuery = '';
  searchCategory = 'number';

  selectedContract = null;

  constructor() {
    makeAutoObservable(this, {
      filteredContracts: computed,  
    });
    this.fetchContracts();
  }

  fetchContracts() {
    this.contracts = ContractsService.getContracts();
  }

  setSearchQuery(query, category) {
    this.searchQuery = query;
    this.searchCategory = category;
  }

  resetSearch() {
    this.searchQuery = '';
    this.searchCategory = 'number';
  }

  get filteredContracts() {
    const contracts = this.contracts;  
    if (!this.searchQuery) return contracts;

    return contracts.filter(contract => {
      switch (this.searchCategory) {
        case 'number':
          return contract.number.toLowerCase().includes(this.searchQuery.toLowerCase());
        case 'amount':
          return contract.amountWithoutNDS.toString().includes(this.searchQuery);
        case 'manager':
          return contract.manager.toLowerCase().includes(this.searchQuery.toLowerCase());
        default:
          return true;
      }
    });
  }

  viewContract(id) {
    this.selectedContract = this.contracts.find(contract => contract.id === id);
  }

  closeDetails() {
    this.selectedContract = null;
  }
}

export default new ContractsStore();
