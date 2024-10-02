import Job from "../models/job-model.js";

export class JobService {
  async getUnpaidJobsSum() {
    return await Job.sum("price", { where: { paid: false } });
  }

  async getJobsByContract(contractId: number) {
    return await Job.findAll({ where: { contractId } });
  }

  async createJob(data: {
    contractId: number;
    description: string;
    operationDate: Date;
    paymentDate: Date;
    price: number;
    paid: boolean;
  }) {
    return await Job.create(data);
  }
}
