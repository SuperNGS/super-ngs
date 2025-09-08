import express from 'express';
import PublicController from '../controllers/public.controller.js';

const router = express.Router(); // Create a router instance

// GET a link to the portfolio headshot image
router.get('/headshot', PublicController.getHeadshot);
router.get('/headline', PublicController.getHeadline);
router.get('/headline/name', PublicController.getHeadlineName);
router.get('/headline/title', PublicController.getHeadlineTitle);
router.get('/headline/linkedin', PublicController.getHeadlineLinkedin);
router.get('/headline/github', PublicController.getHeadlineGithub);


// Export the router to be used in other parts of the application
export default router;