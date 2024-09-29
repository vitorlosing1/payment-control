import { Request, Response } from "express";
import { ProfileService } from "../services/profile-service.js";

export class ProfileController {
  private profileService: ProfileService;

  constructor() {
    this.profileService = new ProfileService();
  }

  public async createProfile(req: Request, res: Response): Promise<Response> {
    try {
      const profile = await this.profileService.createProfile(req.body);
      return res.status(201).json(profile);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to create profile", error });
    }
  }

  public async getProfileBalance(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const profile = await this.profileService.getProfileBalance(
        Number(req.params.id)
      );
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      return res.status(200).json({ balance: profile.balance });
    } catch (error) {
      return res.status(500).json({ message: "Failed to get balance", error });
    }
  }
}
