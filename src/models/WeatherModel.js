import { events } from "../constants/constants";
import Observer from "../observers/Observer";

export default class WeatherModel {
  /**
   * 
   * @param {Object} params
   * @param {Observer} params.observer 
   */
  constructor({ observer }) {
    this.observer = observer;
  }


  updateWeather = async (coords) => {
    /* do requset here */
    // const response = await fetch('http://example.com/');
    // if(!response.ok) {
    //     throw new Error('failed to get weather');
    // }
    //const data = await response.json();
    const data = { overcast : "sunny"};
    this.observer.broadcast(events.weatherUpdated, data);
    return data;
  };
}
