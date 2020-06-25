import LocationModel from "./models/LocationModel";
import WeatherModel from "./models/WeatherModel";
import LocationController from "./controllers/LocationController";
import { controllers as contrNames } from "./constants/constants";

export default class AppController {
  constructor(observer) {
    this.observer = observer;
    this.models = {};
    this.models[contrNames.location] = new LocationModel({
      observer: this.observer,
    });
    this.models[contrNames.weather] = new WeatherModel({
      observer: this.observer,
    });
    this.controllers = {};
    this.controllers[contrNames.location] = new LocationController(
      this.models[contrNames.location]
    );
  }

  loadInitialData() {
    this.models[contrNames.location]
      .updateLocation()
      .then((coords) => {
        console.log("location", coords);
        return this.models[contrNames.weather].updateWeather(coords);
      })
      .then((weather) => {
        console.log("weather", weather);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getController(name) {
    return this.controllers[name];
  }
}
