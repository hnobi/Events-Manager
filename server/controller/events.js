
import eventsData from './../models/events';

export default class EventsController {
  /**
                       * add event to the existing events
                       * @param {obj} req
                       * @param {obj} res
                       * @memberof EventsController
                       * @return {obj} insertion error messages or success messages
                       */

  static addevent(req, res) {
    const {
      title, location, date, description,
    } = req.body;
    const newEventId = eventsData[eventsData.length - 1].id + 1;
    eventsData.push({
      id: newEventId,
      title,
      location,
      date,
      description,
    });
    res.status(201);
    res.json({
      status: 'Success',
      message: 'Successfully added new Event',
      eventsData,
    });
  }


  /**
             * modified or update existing event
             * @static
             * @param {obj} req
             * @param {obj} res
             *  @return {obj} insertion error messages or success messages
             * @memberof EventsController
             */
  static modifyEvent(req, res) {
    const {
      title, location, date, description,
    } = req.body;
    for (let i = 0; i < eventsData.length; i += 1) {
      if (eventsData[i].id === parseInt(req.params.eventId, 10)) {
        eventsData[i].title = (title) || eventsData[i].title;
        eventsData[i].location = (location) || eventsData[i].location;
        eventsData[i].description = (description) || eventsData[i].description;
        eventsData[i].date = (date) || eventsData[i].date;
        res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully updated event',
            eventsData,
          });
      }
    }
    res.status(400);
    res.json({
      status: 'Failed',
      message: 'event id does not exist',
    });
  }

  static deleteEvent(req, res) {
    for (let i = 0; i < eventsData.length; i++) {
      if (eventsData[i].id === parseInt(req.params.eventId, 10)) {
        eventsData.splice(i, 1);
        res.status(200);
        res.json({
          status: 'Success',
          message: 'Successfully deleted event',
          eventsData
        });
      }
    }
    res.status(400);
    res.json({
      status: 'failed',
      message: 'events id does not exist',

    });
  }

  static showAllEvents(req, res) {
    if (eventsData.length !== 0) {
      res.status(200)
        .json(eventsData);
    }
    return res.status(400).json({ message: 'No events available' });
  }
}

