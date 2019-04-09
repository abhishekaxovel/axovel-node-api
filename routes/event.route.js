const express = require('express');
const router = express.Router();

const event_controller = require('../controllers/event.controller');

// event routes 
router.post('/event', event_controller.createOrUpdateEvent);
router.get('/eventInformation', event_controller.eventInformation);
router.post('/create_event', event_controller.event_create);
router.get('/get_event', event_controller.event_details);
router.post('/update_event', event_controller.event_update);
router.post('/delete_event', event_controller.event_delete);

router.post('/imageUpload', event_controller.uploadEventImage);
// router.get('/getImages', event_controller.getImage);
// router.post('/imageUpload', event_controller.uploadImages);

module.exports = router;