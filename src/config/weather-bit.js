const axios = require('axios');
const { API_KEY } = require('./env');

class WeatherBit {
  constructor() {
    this.key = API_KEY;
    this.uri = 'https://api.weatherbit.io/v2.0';
  }
  /**
   * Search for the current weather by city name.
   *
   * @param {string} city City name.
   * @returns {object} the current weather information.
   */
  async current(name) {
    try {
      const { data } = await axios.get(`${this.uri}/current`, {
        params: {
          city: name,
          key: this.key
        }
      });

      if (typeof data === 'string') {
        return { message: 'No city has been found.', code: '404' };
      }

      return { ...data, code: 200 };
    } catch (e) {
      return { ...e.response.data, code: 500 };
    }
  }
}

module.exports = new WeatherBit();
