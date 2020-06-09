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
   * Search for the current weather by city name.
   *
   * @param {string} city City name.
   * @returns {object} the current weather information.
   */
  async current(name) {
    const params = {
      key: this.wbKey
    };

    try {
      if (!name) {
        const { data } = await axios.get(this.ipUri, {
          params: {
            access_key: this.ipKey
          }
        });

        params.lat = data.latitude;
        params.lon = data.longitude;
      } else {
        params.city = name;
      }

      const { data } = await axios.get(`${this.wbUri}/current`, { params });

      if (typeof data === 'string') {
        throw new Error('No city has been found.');
      } else {
        return { ...data, code: 200 };
      }
    } catch (e) {
      return { message: 'Internal server error', code: 500 };
    }
  }
}

module.exports = new WeatherBit();
