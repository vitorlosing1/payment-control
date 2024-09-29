import { Router } from "express";
import { ProfileController } from "../controllers/profile-controller.js";

const profileRoutes = Router();
const profileController = new ProfileController();

profileRoutes.post("/profiles", (req, res) =>
  profileController.createProfile(req, res)
);
profileRoutes.get("/profiles/:id/balance", (req, res) =>
  profileController.getProfileBalance(req, res)
);

export default profileRoutes;
