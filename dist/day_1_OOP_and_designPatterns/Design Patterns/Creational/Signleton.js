"use strict";
class Weather {
    constructor() {
        const data = []; // Get data from API
        this.citiesData = data;
    }
    getTemperatureByCity(city) {
        return this.citiesData.find((data) => data.city === city);
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new Weather();
        }
        return this.instance;
    }
}
Weather.instance = null;
const instanceOne = Weather.getInstance();
const instanceTwo = Weather.getInstance();
// instanceOne is equal to instanceTwo (instanceOne === instanceTwo)
