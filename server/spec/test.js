import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../app';

// const { expect, assert } = chai;
const should = chai.should();

chai.use(chaiHttp);
describe('All Test Cases for EventManager Application', () => {
  describe('Test case for loading application home page', () => {
    it('should list home properties on / GET', (done) => {
      chai.request(app).get('/')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          res.should.have.status(202);
          res.should.be.json;
          done();
        });
    });
  });

  describe('All test case of invalid route', () => {
    it('/home should not load application home page', (done) => {
      chai.request(app).get('/home')
        .set('Content-Type', 'application/json')
        .end((req, res) => {
          res.should.have.property('status');
          res.should.status(404);
          (res.body).message.should.equal('Page not found');
          (res.body).status.should.equal('Failed');
          (res.body).should.deep.equal({
            status: 'Failed',
            message: 'Page not found'
          });
          done();
        });
    });
    it('should not load route', (done) => {
      chai.request(app).get('/api/v1')
        .set('Content-Type', 'application/json')
        .end((req, res) => {
          res.should.have.property('status');
          res.should.status(404);
          (res.body).message.should.equal('Page not found');
          (res.body).status.should.equal('Failed');
          (res.body).should.deep.equal({
            status: 'Failed',
            message: 'Page not found'
          });
          done();
        });
    });
  });
  describe('All test case for event', (done) => {
    describe('All test case for getting or listing all event of a center', (done) => {
      it('should not load route', (done) => {
        chai.request(app).get('/api/v1/events')
          .set('Content-Type', 'application/json')
          .end((req, res) => {
            res.should.have.property('status');
            res.should.status(200);
            done();
          });
      });
    });
  });

  describe('All test case for center', (done) => { });
});
