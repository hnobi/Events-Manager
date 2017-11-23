import centersData from '../models/centers';

export default class CentersController {
    /**
                             * add center to the existing centers
                             * @param {obj} req
                             * @param {obj} res
                             * @memberof CentersController
                             * @return {obj} insertion error messages or success messages
                             */
    static addcenter(req, res) {
        const {
      name, address, facilities,
    } = req.body;
        const newCenterId = centersData[centersData.length - 1].id + 1;
        centersData.push({
            id: newCenterId,
            name,
            address,
            facilities,
        });
        res.status(201);
        res.json({
            status: 'Success',
            message: 'Successfully added new center',
            centersData,
        });
    }

    /**
                            * get a single  center 
                            * @param {obj} req
                            * @param {obj} res
                            * @memberof CentersController
                            * @return {obj} insertion error messages or success messages
                            */
    static showSingleCenter(req, res) {
        const {
      name, address, facilities,
    } = req.body;
        for (let j = 0; j < centersData.length; j = j + 1) {
            if (centersData[j].id === req.params.centerId) {
                centersData[j].name = centersData[j].name;
                centersData[j].address = centersData[j].address;
                centersData[j].facilities = centersData[j].facilities
            }
        }
    }

    /**
                              * show the list of all centers
                              * @param {obj} req
                              * @param {obj} res
                              * @memberof CentersController
                              * @return {obj} insertion error messages or success messages
                              */
    static showAllCenters(req, res) {
        if (centersData.length !== 0) {
            res.status(200)
                .json(centersData);
        }
        return res.status(400).json({ message: 'No available recipes' });
    }
}
