const express = require('express');

const router = express.Router();
const votesController = require('../controllers/votes');

router.get('/votes', votesController.getAllVotes);
router.get('/votes/:id', votesController.getOneVote);
router.post('/votes', votesController.addVote);
router.patch('/votes/:id', votesController.updateVote);
router.delete('/votes/:id', votesController.removeVote);

module.exports = router;
