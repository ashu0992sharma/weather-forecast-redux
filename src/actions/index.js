import axios from 'axios';

const API_KEY = "893854a04aced86065b609c5ce5cf84f";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ind&units=metric`;
	const request = axios.get(url);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

