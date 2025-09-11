import express from 'express';
import SkillsController from '../controllers/skills.controller.js';

const router = express.Router(); // Create a router instance

// Route to post email contact form submissions
router.get('/', SkillsController.getSkills);

// Export the router to be used in other parts of the application
export default router;