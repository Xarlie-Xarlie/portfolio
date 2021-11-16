//api website: https://developer.accuweather.com
//we have at least 50 requests a day with a free account
const key = 'LvtdoaxDfIGpFYGcRQfCngD0JhIyU91D';

//get weather information
const getWeather = async (id) =>{
    const baseURL='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(baseURL+query);
    const data = await response.json();
    return data[0];
};

//get city information
const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseURL+query);
    const data = await response.json()
    return data[0];
};
