import { Request, Response } from "express";
import { PaymentService } from "../services/payment-service.js";

export class PaymentController {
  private paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  public async createPayment(req: Request, res: Response): Promise<Response> {
    try {
      const payment = await this.paymentService.createPayment(req.body);
      return res.status(201).json(payment);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to create payment", error });
    }
  }

  public async getPayments(req: Request, res: Response): Promise<Response> {
    try {
      const payments = await this.paymentService.getPayments();
      return res.status(200).json(payments);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to fetch payments", error });
    }
  }
}
