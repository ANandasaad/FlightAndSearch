const {
  FlightRepository,
  AirplaneRepository,
} = require("../respository/index.js");
const { compareTime } = require("../utils/helper.js");
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      //   console.log(data);
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplaneById(
        data.airplaneId
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong while creating Flight");
      throw { error };
    }
  }
  async deleteFlight(id) {
    try {
      const deleteFlight = await this.flightRepository.deleteFlight(id);
      return deleteFlight;
    } catch (error) {
      console.log("Something went wrong while deleting Flight");
      throw { error };
    }
  }
  async getAllFlights(data) {
    try {
      const allFlights = await this.flightRepository.getAllFlight(data);
      return allFlights;
    } catch (error) {
      console.log("Something went wrong while getting all flights");
      throw { error };
    }
  }
  async getFlightById(id) {
    try {
      const flight = await this.flightRepository.getFlightById(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong while getting flight");
      throw { error };
    }
  }
  async updateFlight() {
    try {
    } catch (error) {}
  }
}

module.exports = FlightService;
