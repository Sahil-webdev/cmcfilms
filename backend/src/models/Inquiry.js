import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    coupleName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    weddingDate: { type: Date, required: true },
    venueLocation: { type: String, required: true },
    estimatedBudget: { type: String, required: true },
    servicesRequested: [{ type: String }],
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Proposal Sent', 'Confirmed', 'Archived'],
      default: 'New',
    },
    notes: { type: String, default: '' },
  },
  { timestamps: true }
);

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
