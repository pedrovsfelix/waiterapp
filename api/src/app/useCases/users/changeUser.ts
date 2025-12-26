import type { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { User } from "../../models/User.js";

export async function changeUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const { name, email, password, type } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    if (!name && !email && !password && !type) {
        return res.status(400).json({ error: "No data provided for update" });
    }

    const updateData: Record<string, any> = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (type) updateData.type = type;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      {
        new: true,
        runValidators: true
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(updatedUser);

  } catch (e: any) {
    if (e.code === 11000 && e.keyPattern?.email) {
        return res.status(409).json({ error: "Email already in use" });
    }

    if (e.name === 'ValidationError') {
        return res.status(400).json({ error: e.message });
    }

    console.error(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}
