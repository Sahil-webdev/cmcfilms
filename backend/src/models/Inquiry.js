import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    coupleName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    weddingDate: { type: Date, default: null },
    venueLocation: { type: String, default: '' },
    estimatedBudget: { type: String, default: '' },
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
