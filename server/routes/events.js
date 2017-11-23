import express from 'express';
import EventsController from '../controller/events';
import CentersController from '../controller/centers';

const router = express.Router();

// events routes
router.route('/events')
    .post(EventsController.addevent);

router.route('/events/:eventId')
    .put(EventsController.modifyEvent)
    .delete(EventsController.deleteEvent);

// center routes
router.route('/centers')
    .post(CentersController.addcenter);


export default router;
