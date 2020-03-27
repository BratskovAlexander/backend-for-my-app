const service = require("../services/country-service");

class CountryController {
  constructor() {}
  getAllCountries = async (req, res) => {
    try {
      const result = await service.getAllCountries();
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  addCountry = async (req, res) => {
    try {
      const result = service.addCountry(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };

  updateCountry = async (req, res) => {
    try {
      const result = service.updateCountry(req.body, req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };

  deleteCountry = async (req, res) => {
    try {
      const result = service.deleteCountry(req.params.id);
      console.log(req.body, req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };
}

module.exports = CountryController;
