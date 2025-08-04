import express from 'express';
import { getAllJobs, getJobById, createJob } from '../controllers/jobController.js';

const router = express.Router();

router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobById);
router.post('/jobs', createJob);

export default router;
