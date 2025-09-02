import express from 'express';
import ContactController from '../controllers/contact.controller.js';

const router = express.Router(); // Create a router instance

// Route to post email contact form submissions
router.post('/', ContactController.sendEmail);

// Export the router to be used in other parts of the application
export default router;