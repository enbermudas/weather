const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src');

chai.use(chaiHttp);
const { expect, request } = chai;

describe('(SERVER) ROUTER', () => {
  it('should succeed', (done) => {
    request(server)
      .get('/api/v1/')
      .end((err, res) => {
        expect(res.body).to.have.property('message');
        expect(res).to.have.status(200);
        done();
      });
  });
});
