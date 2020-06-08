const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src');

chai.use(chaiHttp);
const { expect, request } = chai;

describe('(CONFIG) WEATHER BIT', () => {
  describe('CURRENT', () => {
    it('should fail if non-existent city name is provided', (done) => {
      request(server)
        .post('/api/v1/weather/current')
        .send({
          name: 'non-existent-city-name'
        })
        .end((err, res) => {
          expect(res.body).to.have.property('message');
          expect(res).to.have.status(404);
          done();
        });
    });

    it('should fail if no city name is provided', (done) => {
      request(server)
        .post('/api/v1/weather/current')
        .end((err, res) => {
          expect(res.body).to.have.property('error');
          expect(res).to.have.status(500);
          done();
        });
    });

    it('should succeed and return the current weather', (done) => {
      request(server)
        .post('/api/v1/weather/current')
        .send({
          name: 'Valencia'
        })
        .end((err, res) => {
          expect(res.body).to.have.property('data');
          expect(res.body).to.have.property('count');
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
