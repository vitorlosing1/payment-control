import Payment from "../models/payment-model.js";

export class PaymentService {
  async createPayment(data: {
    jobId: number;
    operationDate: Date;
    paymentValue: number;
  }) {
    return await Payment.create(data);
  }

  async getPayments() {
    return await Payment.findAll();
  }
}
