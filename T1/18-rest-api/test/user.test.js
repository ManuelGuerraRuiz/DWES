const sinon = require('sinon');
const { showUser } = require('../src/controllers/user')

const mockReq = (id) => ({
    params: {
        id,
    }
});

const mockRes = () => ({
    status: function(s) { this.statusCode=s; return this; },
    statusCode: 200,
    send: function(b) { this.body=b; return this;},
});

describe('getUserById 200 Ok', () => {
    it('should getUserById', (done) => {
        const userId = '1';
        const callback = sinon.stub();
        const res = showUser(mockReq(userId), mockRes());
        console.log(JSON.stringify(res, null, 2));
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(userId);
        done();
    });
});

describe('getUserById Error 404', () => {
    it('should getUserById', (done) => {
        const userId = 123;
        const callback = sinon.stub();
        const res = showUser(mockReq(userId), mockRes());
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe('User not found');
        done();
    });
});