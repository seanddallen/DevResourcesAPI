const express = require('express');

const router = express.Router();
const resourcesController = require('../controllers/resources');

router.get('/resources', resourcesController.getAllResources);
router.get('/resources/:id', resourcesController.getOneResource);
router.post('/resources', resourcesController.addResource);
router.patch('/resources/:id', resourcesController.updateResource);
router.delete('/resources/:id', resourcesController.removeResource);

module.exports = router;
