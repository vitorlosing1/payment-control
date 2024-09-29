import { Router } from "express";
import { JobController } from "../controllers/job-controller.js";

const jobRoutes = Router();
const jobController = new JobController();

jobRoutes.get("/jobs/unpaid", (req, res) =>
  jobController.getUnpaidJobsSum(req, res)
);
jobRoutes.get("/contracts/:contractId/jobs", (req, res) =>
  jobController.getJobsByContract(req, res)
);

export default jobRoutes;
