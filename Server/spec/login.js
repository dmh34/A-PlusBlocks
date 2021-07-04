const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../Server/app');

chai.should();

chai.use(chaiHttp);

describe('Login Route', () => {
    it('it should not log in with invalid password', (done) => {
        chai.request(server)
            .post("/login")
            .send({ username: "jj", password: "12345" })
            .end((err,res) => {
                res.should.have.status(401)
                res.should.have.property('message').equal("Username or password is incorrect");
            })
        done();
    })

    it('it should log in', (done) => {
       
        chai.request(server)
            .post('/login')
            .send({ username: "jj", password: "password123" })
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.property('message').eql("Log in sucessful");
            })
        done();
    })

    it('it should create new user', (done) => {
        chai.request(server)
            .post('/login')
            .send({ username: "testUser", password: "12345" })
            .end((err, res) =>{
                res.should.have.status(200);
                res.should.have.property('message').eql("New user created");
            })
        done();
    })
})