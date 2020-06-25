export default class LocationController {
    constructor(model) {
        this.model = model;
    }

    updateValues () {
        console.log('update the location called');
        this.model.updateLocation();
    }

}