const express = require('express');

const router = express.Router();
const tagsController = require('../controllers/tags');

router.get('/tags', tagsController.getAllTags);
router.get('/tags/:resource_id', tagsController.getAllResourceTags);
router.post('/tags/:resource_id', tagsController.addTag);
router.patch('/tags/:id', tagsController.updateTag);
router.delete('/tags/:id', tagsController.removeTag);

module.exports = router;
