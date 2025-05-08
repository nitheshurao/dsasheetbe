import { Router } from 'express';
import auth from '../middleware/authMiddleware.js';
import {
  deleteProblem,
  getAllTopics,
  getUserProgress,
  updateProblem,
  updateUserProgress
} from '../controllers/dsaController.js';
import { createTopic } from '../controllers/dsaController.js';
import { getProgressReport } from '../controllers/dsaController.js';

const router = Router();

router.post('/topics', createTopic); 
router.get('/topics', getAllTopics);
router.get('/progress', auth, getUserProgress);
router.post('/update-progress', auth, updateUserProgress);
router.get('/progress-report', auth, getProgressReport);


router.put('/topics/:topicId', auth, updateProblem);
router.delete('/topics/:topicId/:problemId', auth, deleteProblem);
export default router;
