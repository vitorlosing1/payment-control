import { Router } from "express";
import { PaymentController } from "../controllers/payment-controller.js";

const paymentRoutes = Router();
const paymentController = new PaymentController();

paymentRoutes.post("/payments", (req, res) =>
  paymentController.createPayment(req, res)
);
paymentRoutes.get("/payments", (req, res) =>
  paymentController.getPayments(req, res)
);

export default paymentRoutes;
