import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  mobile: number;
  address: string;
  number_of_seats: number;
  special_note: string;
  date: Date;
  time: String;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  address: { type: String, required: true },
  number_of_seats: { type: Number, required: true },
  special_note: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
