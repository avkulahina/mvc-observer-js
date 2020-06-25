import { events } from "../constants/constants";
import Observer from "../observers/Observer";

export default class LocationModel {
  /**
   * 
   * @param {Object} params
   * @param {Observer} params.observer 
   */
  constructor({ observer }) {
    this.observer = observer;
  }

  getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };

  updateLocation = async () => {
    const position = await this.getCurrentPosition();
    console.log('update the location got.');
    this.observer.broadcast(events.locationUpdated, position.coords);
    return position.coords;
  };
}
