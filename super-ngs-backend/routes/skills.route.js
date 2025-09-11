import express from 'express';
import SkillsController from '../controllers/skills.controller.js';

const router = express.Router(); // Create a router instance

// Route to get all skills form submissions
router.get('/', SkillsController.getSkills);
// Route to get only soft skills
router.get('/soft', SkillsController.getSoftSkills);
// Route to get only technical skills
router.get('/technical', SkillsController.getTechnicalSkills);

// Export the router to be used in other parts of the application
export default router;