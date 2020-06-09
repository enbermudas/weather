const axios = require('axios');
const { WB_KEY, IP_KEY } = require('./env');

class WeatherBit {
  constructor() {
    this.wbKey = WB_KEY;
    this.ipKey = IP_KEY;
    this.wbUri = 'https://api.weatherbit.io/v2.0';
    this.ipUri = 'http://api.ipapi.com/check';
  }

  /**
   * Returns an error object.
   *
   * @param {string} message Error message.
   */
  error(message = 'Internal server error') {
    return { message, code: 500 };
  }

  /**
   * Returns the data.
   *
   * @param {object} data Data to be returned.
   */
  succeed(data) {
    return { ...data, code: 200 };
  }

  /**
   * Check if the city name is defined.
   *
   * @param {string} name City name.
   */
  async checkName(name) {
    if (!name) {
      const { data } = await axios.get(this.ipUri, {
        params: { access_key: this.ipKey }
      });

      return { lon: data.longitude, lat: data.latitude };
    } else {
      return { city: name };
    }
  }

  /**
   * Search for the current weather by city name.
   *
   * @param {string} city City name.
   * @returns {object} the current weather information.
   */
  async current(name) {
    try {
      const params = await this.checkName(name);

      const { data } = await axios.get(`${this.wbUri}/current`, {
        params: { ...params, key: this.wbKey }
      });

      if (typeof data === 'string') throw new Error('No city has been found.');

      return this.succeed(data);
    } catch (e) {
      return this.error();
    }
  }

  /**
   * Search for the forcast weather by city name.
   *
   * @param {string} city City name.
   * @returns {object} the forecast weather information.
   */
  async forecast(name) {
    try {
      const params = await this.checkName(name);

      const { data } = await axios.get(`${this.wbUri}/forecast/daily`, {
        params: { ...params, days: 5, key: this.wbKey }
      });

      if (typeof data === 'string') throw new Error('No city has been found.');

      return this.succeed(data);
    } catch (e) {
      return this.error();
    }
  }
}

module.exports = new WeatherBit();
