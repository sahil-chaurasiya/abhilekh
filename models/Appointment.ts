import mongoose, { Schema, models, model, type Document } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  additionalNotes?: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    age: { type: Number, required: true, min: 0, max: 120 },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    symptoms: { type: String, required: true, maxlength: 1000 },
    additionalNotes: { type: String, maxlength: 1000 },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

AppointmentSchema.index({ createdAt: -1 });

export default models.Appointment ||
  model<IAppointment>("Appointment", AppointmentSchema);
