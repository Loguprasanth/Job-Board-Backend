import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['Full-time', 'Part-time', 'Contract'], required: true },
  mode: { type: String, enum: ['Remote', 'On-site', 'Hybrid'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Job', jobSchema);
