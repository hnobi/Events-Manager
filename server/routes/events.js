import express from 'express';
import EventsController from '../controller/events';
import CentersController from '../controller/centers';
import ValidateEvents from '../middlewares/validator';
const router = express.Router();

// events routes
router.route('/events')
    .post(ValidateEvents.addEventValidator, EventsController.addevent)
    .get(EventsController.showAllEvents);

router.route('/events/:eventId')
    .put(ValidateEvents.modifyEventValidator, EventsController.modifyEvent)
    .delete(EventsController.deleteEvent);

// center routes
router.route('/centers')
    .post(CentersController.addcenter)
    .get(CentersController.showAllCenters);

router.route('/centers/:centerId')
    .get(CentersController.showSingleCenter)
    .put(CentersController.modifycenter);


export default router;
