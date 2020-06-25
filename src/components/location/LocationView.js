import {events, selectors} from "../../constants/constants";
import locationHtml from "./location.html";

export default class LocationView {
    constructor({parentDom, controller, observer}) {
        this.parentDom = parentDom;
        this.observer = observer;
        this.controller = controller;
        this.observer.subscribe(events.locationUpdated, this.updateValues);
        this.render();
    }

    /**
     * @param {Object} coords
     * @param {number} coords.latitude
     * @param {number} coords.longitude
     */
    updateValues = (coords) => {
        this.longitude.value.innerText = coords.longitude;
        this.latitude.value.innerText = coords.latitude;
        console.log('update the location completed');
    }

    updateStrings = () => {
        this.longitude.label.innerText = "longitude";
        this.latitude.label.innerText = "latitude";

    }

    handleUpdateValues = () => this.controller.updateValues();

    render() {
        console.log(locationHtml);
        this.parentDom.insertAdjacentHTML("beforeend",locationHtml);
        this.latitude = {};
        this.latitude.label = this.parentDom.querySelector(selectors.latitudeLabel);
        this.latitude.value = this.parentDom.querySelector(selectors.latitudeValue);
        this.longitude = {};
        this.longitude.label = this.parentDom.querySelector(selectors.longitudeLabel);
        this.longitude.value = this.parentDom.querySelector(selectors.longitudeValue);
        this.updateButton = this.parentDom.querySelector(selectors.locationButton);
        this.updateButton.addEventListener("click", this.handleUpdateValues);
        this.updateStrings();
    }
}