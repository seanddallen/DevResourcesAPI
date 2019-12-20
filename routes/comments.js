const express = require('express');

const router = express.Router();
const commentsController = require('../controllers/comments');

router.get('/comments', commentsController.getAllComments);
router.get('/comments/:id', commentsController.getOneComment);
router.post('/comments', commentsController.addComment);
router.patch('/comments/:id', commentsController.updateComment);
router.delete('/comments/:id', commentsController.removeComment);

module.exports = router;
