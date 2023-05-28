import { Request, Response } from 'express';
import User from '../models/User';

export const createReservation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create new reservation' });
  }
};

export const getAllReservations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getUserReservation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const updateReservation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (user) {
      res
        .status(200)
        .json({ message: 'Reservation updated successfully', user });
    } else {
      res.status(404).json({ error: 'User reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user reservation' });
  }
};

export const deleteReservation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(200).json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ error: 'User reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user reservation' });
  }
};
