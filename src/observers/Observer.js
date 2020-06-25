import {events} from "../constants/constants";


export default class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe = (event, callback) => {
        const [observer] = this.observers.filter((obs) => 
            obs.event === event && obs.callback === callback);
        if (!observer) {
            this.observers.push({event, callback});
        }
    }

    unsubscribe = (event, callback) => {
        this.observers = this.observers.filter((obs) => 
            obs.event !== event && obs.callback !== callback);
    }

    broadcast = (event, data) => {
        this.observers.forEach((obs) => {
            if(obs.event === event) {
                obs.callback(data);
            }
        });
    }

}