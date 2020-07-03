const express = require('express');

const router = express.Router();
const tagsController = require('../controllers/tags');

router.get('/tags', tagsController.getAllTags);
router.get('/tags/:id', tagsController.getAllResourceTags);
router.post('/tags', tagsController.addTag);
router.patch('/tags/:id', tagsController.updateTag);
router.delete('/tags/:id', tagsController.removeTag);

module.exports = router;
