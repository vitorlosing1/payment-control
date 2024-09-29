import Profile from "../models/profile-model.js";

export class ProfileService {
  async createProfile(data: {
    firstName: string;
    lastName: string;
    profession: string;
    balance: number;
    type: string;
  }) {
    return await Profile.create(data);
  }

  async getProfileBalance(id: number) {
    return await Profile.findByPk(id);
  }

  async updateBalance(id: number, amount: number) {
    const profile = await Profile.findByPk(id);
    if (!profile) throw new Error("Profile not found");

    profile.balance += amount;
    await profile.save();
    return profile;
  }
}
