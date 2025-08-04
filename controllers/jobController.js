import Job from '../models/Job.js';

// GET /jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

// GET /jobs/:id
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch job' });
  }
};

// POST /jobs
export const createJob = async (req, res) => {
   try {
    const { title, company, type, mode, description } = req.body;

    if (!title || !company || !type || !mode || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newJob = new Job({ title, company, type, mode, description });
    const savedJob = await newJob.save();

    res.status(201).json(savedJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
