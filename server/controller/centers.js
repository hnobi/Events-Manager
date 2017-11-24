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
  static getSingleCenter(req, res) {
    for (let j = 0; j < centersData.length; j++) {
      if (centersData[j].id === parseInt(req.params.centerId, 10)) {
        res.status(200)
          .json({
            status: 'Success',
            message: centersData[j],

          });
      }
    }
    res.status(400)
      .json({
        status: 'failed',
        message: 'center  id does not exist',
      });
  }


  /**
                * modified or update existing center
                * @static
                * @param {obj} req
                * @param {obj} res
                *  @return {obj} insertion error messages or success messages
                * @memberof CenterController
                */
  static modifycenter(req, res) {
    const {
      name, address, facilities,
    } = req.body;
    for (let i = 0; i < centersData.length; i += 1) {
      if (centersData[i].id === parseInt(req.params.centerId, 10)) {
        centersData[i].name = (name) || centersData[i].name;
        centersData[i].address = (address) || centersData[i].address;
        centersData[i].facilities = (facilities) || centersData[i].facilities;
        res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully updated center',
            centersData,
          });
      }
    }
    res.status(400);
    res.json({
      status: 'Failed',
      message: 'center id does not exist',
    });
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

