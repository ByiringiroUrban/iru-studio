import mongoose, { Document, Schema } from 'mongoose';

export interface IBookingItem {
  service: string;
  name?: string;
  categoryId?: string;
  tier?: string;
  price?: string;
  quantity: number;
}

export interface IBooking extends Document {
  name: string;
  email: string;
  phone?: string;
  eventDate?: Date;
  location?: string;
  message?: string;
  items: IBookingItem[];
  totalAmount?: number;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const BookingItemSchema = new Schema<IBookingItem>({
  service: { type: String, required: true },
  name: { type: String },
  categoryId: { type: String },
  tier: { type: String },
  price: { type: String },
  quantity: { type: Number, default: 1 }
});

const BookingSchema = new Schema<IBooking>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  eventDate: { type: Date },
  location: { type: String },
  message: { type: String },
  items: [BookingItemSchema],
  totalAmount: { type: Number },
  status: { type: String, enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

BookingSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model<IBooking>('Booking', BookingSchema);

