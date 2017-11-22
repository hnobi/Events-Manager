
import eventsData from '../models/events';

export default class EventsController {
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
            message: 'Successfully added new recipe',
            eventsData,
        });
    }
}
