import express from 'express';
import ExperiencesController from '../controllers/experiences.controller.js';

const router = new express.Router();

router.get("/", ExperiencesController.getExperiences)

export default router;