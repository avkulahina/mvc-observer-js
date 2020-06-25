import {events, selectors} from "../../constants/constants";
import weatherHtml from "./weather.html";
import controllers from "../../constants/controllers";

export default class LocationView {
    constructor({parentDom, controller, observer}) {
        this.parentDom = parentDom;
        this.observer = observer;
        this.controller = controller;
        this.observer.subscribe(events.weatherUpdated, this.updateValues);
        this.render();
    }

    /**
     * @param {Object} coords
     * @param {number} coords.latitude
     * @param {number} coords.longitude
     */
    updateValues = (forecast) => {
        this.forecast.overcast.innerText = forecast.overcast;
    }

    render() {
        this.parentDom.insertAdjacentHTML("beforeend",weatherHtml);
        this.forecast = {};
        this.forecast.overcast = document.querySelector(selectors.weatherOvercast);
    }
}