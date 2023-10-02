const { City } = require("../models/index.js");

class CityRepository {
  async createCity({ name }) {
    try {
      const isCityExist = await City.findOne({ where: { name } });
      if (isCityExist) {
        throw new Error("City already exists");
      }
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw new Error("Error creating city: " + error.message);
    }
  }

  async deleteCity({ id }) {
    try {
      const city = await City.destroy({ where: { id } });
      return city;
    } catch (error) {
      throw new Error("Error deleting city: " + error.message);
    }
  }
}

module.exports = CityRepository;
