import express from 'express';
import EventsController from '../controller/events';

const router = express.Router();


router.route('/events')
    .post(EventsController.addevent);

router.route('/events/:eventId')
    .put(EventsController.modifyEvent);
export default router;
