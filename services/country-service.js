const Country = require("../models/countryModel");

const getAllCountries = async () => {
  const result = Country.find({});
  return result;
};

const addCountry = async body => {
  try {
    const country = new Country(body);
    return await country.save();
  } catch (error) {
    throw new Error("Есть какая-то ошибка в добавлении страны");
  }
};

const updateCountry = async (data, id) => {
  try {
    return await Country.findByIdAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
  } catch (error) {
    throw new Error("Есть какая-то ошибка в изменении страны");
  }
};

const deleteCountry = async id => {
  return await Country.findByIdAndDelete(id);
};

module.exports = {
  getAllCountries,
  addCountry,
  updateCountry,
  deleteCountry
};
