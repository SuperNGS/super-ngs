import express from "express";
import ProjectsController from "../controllers/projects.controller.js";

// Create a router instance
const router = new express.Router();

// Route to get all or specific projects
router.get("/", ProjectsController.getProjects);

// Export the router to be used in other parts of the application
export default router;