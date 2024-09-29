import { Request, Response } from "express";
import { JobService } from "../services/job-service.js";

export class JobController {
  private jobService: JobService;

  constructor() {
    this.jobService = new JobService();
  }

  public async getUnpaidJobsSum(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const sum = await this.jobService.getUnpaidJobsSum();
      return res.status(200).json({ totalUnpaid: sum });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to fetch unpaid jobs sum", error });
    }
  }

  public async getJobsByContract(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const jobs = await this.jobService.getJobsByContract(
        Number(req.params.contractId)
      );
      return res.status(200).json(jobs);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to fetch jobs by contract", error });
    }
  }
}
