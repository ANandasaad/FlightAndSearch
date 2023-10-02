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
  async getAllCities() {
    try {
      const cities = await City.findAll();
      if (cities.length < 1) {
        throw new Error("No city exists");
      }
      return cities;
    } catch (error) {
      throw new Error("Error getting cities: " + error.message);
    }
  }
  async getCity({ id }) {
    try {
      const isCityExist = await City.findOne({ where: { id } });
      if (!isCityExist) {
        throw new Error("City does not exist");
      }
      const city = await City.findOne({ where: { id } });
      return city;
    } catch (error) {
      throw new Error("Error getting city: " + error.message);
    }
  }
  async updateCity({ id, name }) {
    try {
      const isCityExist = await City.findOne({ where: { id } });
      if (!isCityExist) {
        throw new Error("City does not exist");
      }
      const city = await City.update({ name }, { where: { id } });
      return city;
    } catch (error) {
      throw new Error("Error updating city: " + error.message);
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
