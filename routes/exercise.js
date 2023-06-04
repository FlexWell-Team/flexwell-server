const express = require('express');
const exerciseController = require('../controllers/exercise');

const router = express.Router();

router.get('/exercises', exerciseController.getExercises);
router.get('/exercises/:id', exerciseController.getExerciseDetailById);

module.exports = router;