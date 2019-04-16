process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const getController = require('../../src/server/controllers/get');

describe('controllers : get', () => {

  describe('getRegister', ({}) => {
    it('should return This Worked!', (done) => {
      getController.getRegister({data: 'blah'}, (err, res) => {
        should.not.exist(err);
        res.should.eql('This Worked!');
        done();
      });
    });
  });

});
