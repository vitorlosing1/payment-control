import { Router } from "express";
import { DepositController } from "../controllers/deposit-controller.js";

const depositRoutes = Router();
const depositController = new DepositController();

depositRoutes.post("/deposits", (req, res) =>
  depositController.createDeposit(req, res)
);

export default depositRoutes;
