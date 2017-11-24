import express from 'express';
import EventsController from '../controller/events';
import CentersController from '../controller/centers';

const router = express.Router();

// events routes
router.route('/events')
    .post(EventsController.addevent)
    .get(EventsController.showAllEvents);

router.route('/events/:eventId')
    .put(EventsController.modifyEvent)
    .delete(EventsController.deleteEvent);

// center routes
router.route('/centers')
    .post(CentersController.addcenter)
    .get(CentersController.showAllCenters);

router.route('/centers/:centerId')
    .get(CentersController.getSingleCenter)
    .put(CentersController.modifycenter);


export default router;
