import validator from 'validator';

export default class ValidateCenters {
    static addCenterValidator(req, res, next) {
        const {
      name, address, facilities
    } = req.body;
        const errors = {};
        if (name === undefined || address === undefined || facilities === undefined) {
            res.status(400)
                .json({
                    message: 'All or some of the field is/are undefined',
                });
        } else {
            if (validator.isEmpty(name)) {
                errors.name = 'name of center is required';
            }
        }
        if (!validator.isEmpty(address)) {
            if (!validator.isLength(address, { min: 20, max: undefined })) {
                errors.address = ' must not be less than 20 characters';
            }
        } else {
            errors.address = 'address of event is required';
        }
        if (!validator.isEmpty(facilities)) {
            if (!validator.isLength(facilities, { min: 15, max: undefined })) {
                errors.facilities = 'facilities must not be less than 40 characters';
            }
        } else {
            errors.facilities = 'facilities of event is required';
        }

        if (Object.keys(errors).length !== 0) {
            return res.status(400)
                .json(errors);
        }
        next();
    }


    static modifycenterValidator(req, res, next) {
        const {
      name, address, facilities
    } = req.body;
        errors = {};
        if (name || address || facilities) {
            if (title) {
                if (!validator.isAlpha(name)) {
                    errors.name = 'name of center must contain only alphabets';
                }
            }


            if (address) {
                if (!validator.isLength(address, { min: 10, max: undefined })) {
                    errors.address = 'addresss must not be less than 10 characters';
                }
            }

            if (!validator.isEmpty(facilities)) {
                if (!validator.isLength(facilities, { min: 25, max: undefined })) {
                    errors.directions = 'facilities must not be less than 25 characters';
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
