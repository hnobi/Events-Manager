import express from 'express';
import EventsController from '../controller/events';

const router = express.Router();


router.route('/events')
    .post(EventsController.addevent);


export default router;
