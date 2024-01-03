import { apiData } from "./utils/weatherStackApi.js";

const data = await apiData("Umm al-Fahm");

console.log(data);
