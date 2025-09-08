import express from 'express';
import PublicController from '../controllers/public.controller.js';

const router = express.Router(); // Create a router instance

// GET a link to the portfolio headshot image
router.get('/headshot', PublicController.getHeadshot);

// Export the router to be used in other parts of the application
export default router;