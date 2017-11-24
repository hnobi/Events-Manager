import validator from 'validator';

export default class ValidateEvents {
    static addEventValidator(req, res, next) {
        const {
      title, location, date, description,
    } = req.body;
        const errors = {};
        if (title === undefined || location === undefined || date === undefined || description === undefined) {
            res.status(400)
                .json({
                    message: 'All or some of the field is/are undefined',
                });
        } else {
            // check if title is not empty.if yes check if it only alpabet else read error -->title is required
            if (!validator.isEmpty(title)) {
                if (!validator.isAlpha(title)) {
                    errors.title = 'Title of event must contain only alphabets';
                }
            } else {
                errors.title = 'Title of event is required';
            }
            // check if location is not empty.if yes check if it character is lessthan 20. else read error -->location is required
            if (!validator.isEmpty(location)) {
                if (!validator.isLength(location, { min: 20, max: undefined })) {
                    errors.location = 'location must not be less than 20 characters';
                }
            } else {
                errors.location = 'location of event is required';
            }
            // check if direction is not empty.if yes check if it character is lessthan 20. else read error -->direction is required

            if (!validator.isEmpty(description)) {
                if (!validator.isLength(description, { min: 25, max: undefined })) {
                    errors.description = 'description must not be less than 40 characters';
                }
            } else {
                errors.description = 'description of event is required';
            }

            if (Object.keys(errors).length !== 0) {
                return res.status(400)
                    .json(errors);
            }
            next();
        }
    }

    static modifyEventValidator(req, res, next) {
        const {
      title, location, date, description,
    } = req.body;
        errors = {};
        if (title || location || description || date) {
            if (title) {
                if (!validator.isAlpha(title)) {
                    errors.title = 'Title of Event must contain only alphabets';
                }
            }


            if (location) {
                if (!validator.isLength(location, { min: 20, max: undefined })) {
                    errors.ingredients = 'location must not be less than 20 characters';
                }
            }

            if (description) {
                if (!validator.isLength(description, { min: 25, max: undefined })) {
                    errors.directions = 'description must not be less than 25 characters';
                }
            }

            if (Object.keys(errors).length !== 0) {
                return res.status(400)
                    .json(errors);
            }
            next();
        } else {
            res.status(400);
            res.json({
                status: 'Failed',
                message: 'Specify a data to update',
            });
        }
    }
}
