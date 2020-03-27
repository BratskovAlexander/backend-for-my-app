const { Router } = require("express");
const router = Router();
const CountryController = require('../controllers/country-controller');
const country_controller = new CountryController();

router.get("/", country_controller.getAllCountries);
router.post("/country", country_controller.addCountry);
router.put("/:id", country_controller.updateCountry);
router.delete("/:id", country_controller.deleteCountry);

module.exports = router;
