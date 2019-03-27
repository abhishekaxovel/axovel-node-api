const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');
const log_in_controller = require('../controllers/logIn.controller');
const event_controller = require('../controllers/event.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);

// user 
router.post('/create', user_controller.user_create);
router.get('/users', user_controller.user_details);
router.put('/:id/update', user_controller.user_update);
router.delete('/:id/delete', user_controller.user_delete);


// user log-in
router.post('/logIn', log_in_controller.user_log_in);
router.get('/logout',log_in_controller.is_user_log_out);


// event routes 
router.post('/create_event', event_controller.event_create);
router.get('/get_event', event_controller.event_details);
router.post('/update_event', event_controller.event_update);
router.post('/delete_event', event_controller.event_delete);



module.exports = router;