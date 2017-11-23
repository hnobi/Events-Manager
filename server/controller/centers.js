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
  