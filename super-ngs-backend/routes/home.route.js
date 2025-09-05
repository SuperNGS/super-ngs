import express from 'express';
import HomeController from '../controllers/home.controller.js';

const router = express.Router(); // Create a router instance

// GET a link to the portfolio headshot image
router.get('/headshot', HomeController.getHeadshot);

// Export the router to be used in other parts of the application
export default router;