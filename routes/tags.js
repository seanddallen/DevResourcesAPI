const express = require('express');

const router = express.Router();
const tagsController = require('../controllers/tags');

router.get('/tags', tagsController.getAllTags);
router.get('/tags/:id', tagsController.getOnetag);
router.post('/tags', tagsController.addtag);
router.patch('/tags/:id', tagsController.updatetag);
router.delete('/tags/:id', tagsController.removetag);

module.exports = router;
