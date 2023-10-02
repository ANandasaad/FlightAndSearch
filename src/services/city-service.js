const { CityRepository } = require("../respository/index.js");
class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity() {
    try {
      const creates = await this.cityRepository.createCity({ name: "Hanoi" });
      return creates;
    } catch (error) {
      console.log("Error creating city: " + error.message);
    }
  }
  async getAllCities() {
    try {
      const cities = await this.cityRepository.getAllCities();
      return cities;
    } catch (error) {
      console.log("Error getting cities: " + error.message);
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Error getting city: " + error.message);
    }
  }
  async updateCity(cityId, name) {
    try {
      const city = await this.cityRepository.updateCity(cityId, name);
      return city;
    } catch (error) {
      console.log("Error updating city: " + error.message);
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await this.cityRepository.deleteCity(cityId);
      return city;
    } catch (error) {
      console.log("Error deleting city: " + error.message);
    }
  }
}

module.exports = CityService;
