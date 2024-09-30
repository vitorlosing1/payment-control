import Contract from "../models/contract-model.js";

export class ContractService {
  async createContract(data: {
    terms: string;
    clientId: number;
    contractorId: number;
    operationDate: Date;
    status: string;
  }) {
    return await Contract.create(data);
  }

  async getContracts() {
    return await Contract.findAll();
  }
}
