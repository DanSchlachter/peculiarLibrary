const axios = require('axios')

const OPENWEATHERMAP_API_KEY = 'TODO'

async function getTemperature() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Berlin&appid=${OPENWEATHERMAP_API_KEY}`)
    const temperature = response.data.main.temp
    return temperature
}

module.exports = { getTemperature }