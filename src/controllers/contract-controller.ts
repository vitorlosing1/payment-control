import { Request, Response } from "express";
import { ContractService } from "../services/contract-service.js";

export class ContractController {
  private contractService: ContractService;

  constructor() {
    this.contractService = new ContractService();
  }

  public async createContract(req: Request, res: Response): Promise<Response> {
    try {
      const contract = await this.contractService.createContract(req.body);
      return res.status(201).json(contract);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to create contract", error });
    }
  }

  public async getContracts(req: Request, res: Response): Promise<Response> {
    try {
      const contracts = await this.contractService.getContracts();
      return res.status(200).json(contracts);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to fetch contracts", error });
    }
  }
}
