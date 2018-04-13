import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../app';

// const {expect } = chai;
const should = chai.should();

chai.use(chaiHttp);

describe('Test for EventManager endpoint', () => {
  it('should list ALL blobs on /blobs GET', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(404);

        done();
      });
  });
});
