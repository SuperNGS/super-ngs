import express from 'express';
import TestController from '../controllers/test.controller.js';

const router = express.Router(); // Create a router instance

// Simple test route to verify database connection
router.get('/', TestController.test);

// Export the router to be used in other parts of the application
export default router;