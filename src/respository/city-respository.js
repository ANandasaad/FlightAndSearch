const { City } = require("../models/index.js");
const {Op} = require("sequelize");
class CityRepository {
  async createCity(name) {
    try {
      console.log(name);  
      const isCityExist = await City.findOne({ where: { name } });
      if (isCityExist) {
        throw new Error("City already exists");
      }
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Error creating city: " + error.message);
      throw{error}
    }
  }
  async getAllCities(filter) {
    try {
  
      if(filter.name)
      {
        const cities= await City.findAll({
          where:{
            name:{
                  [Op.startsWith]:filter.name
            }
          }
        })

        return cities;
      }
      const cities = await City.findAll();
      if (cities.length < 1) {
        throw new Error("No city exists");
      }
      return cities;
    } catch (error) {
      console.log("Error getting cities: " + error.message);
      throw{error}
    }
  }
  async getCity( id ) {
    try {
      const isCityExist = await City.findOne({ where: { id } });
      if (!isCityExist) {
        throw new Error("City does not exist");
      }
      const city = await City.findOne({ where: { id } });
      return city;
    } catch (error) {
      console.log("Error getting city: " + error.message);
      throw{error}
    }
  }
  async updateCity( id, name ) {
    try {
      console.log(id, name)
      const isCityExist = await City.findOne({ where: { id } });
      if (!isCityExist) {
        throw new Error("City does not exist");
      }
      isCityExist.name = name;  
      await isCityExist.save();
      //  const city= await City.update({name},{where:{id}})
      //   return city;
      return isCityExist;
    } catch (error) {
      console.log("Error updating city: " + error.message);
      throw{error}
    }
  }

  async deleteCity( id ) {
    try {
      const city = await City.destroy({ where: { id } });
      return city;
    } catch (error) {
      console.log("Error deleting city: " + error.message);
      throw{error}
    }
  }
}

module.exports = CityRepository;
