import chai from 'chai';
import chaiHttp from 'chai-http';
import centertest from '../model/center';
import eventtest from '../model/event';
import app from '../app'
const chai = chai.expect;
chai.use(chaiHttp);




describe('gdgxgxgg', () => {
    describe('bvvvv', () => {
        it('    ', (done) => {
            get('/')
                .set('Content-Type', 'application/json')
                .end((
                    err, res) => {
                    expect(res.body).to.have.status(200);
                    done();
                }
        });
    });
});
