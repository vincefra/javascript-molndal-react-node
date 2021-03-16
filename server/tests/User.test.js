import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import 'mocha'
import StatusCode from '../config/StatusCode.js'
import app from '../Server.js'

//instansiera chai
Chai.should()
Chai.use(ChaiHTTP)

const randomstring = Math.random().toString(10).substring(1)
const userid = '604e3e30d6ce6355c594ed84'

const user = {
    username: randomstring,
    password: randomstring
}

const testingNonExistentRoute = () => {
    describe('Testing a route which does not exist', () => {
        it('Expecting 404 not found', (done) => {
            Chai.request(app)
                .get('/randomURL')
                .end((request, response) => {
                    response.should.have.a.status(404)
                    done()
                })
        })
    })
}

const createUser = () => {
    describe('Testing POST/CREATE method for user', () => {
        it('Expecting a user to be created', (done) => {
            Chai.request(app)
                .post('/user')
                .send(user)
                .end((error, response) => {
                    /*vad vi förväntar oss,
                    status, objekt, vad i objektet
                    */
                    response.should.have.a.status(StatusCode.CREATED)
                    response.body.should.be.a('object')
                    response.body.should.have.property('username').eq(user.username)
                    response.body.should.have.property('password').eq(user.password)
                    done()
                })

        })

    })
}

const getAllUsers = () => {
    describe('Testing POST/CREATE method for user', () => {
        it('Expecting a list of users', (done) => {
            Chai.request(app)
                .get('/user')
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.OK)
                    response.should.be.a('array')
                    response.should.be.eq(response.body.lenght)
                    done()
                })
        })
    })
}

const updateUser = () => {
    describe('Testing POST/CREATE method for user', () => {
        it('Expecting updating a user', (done) => {
            Chai.request(app)
                .put(`/user/id/${userid}`)
                .send(user)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id').eq(userid)
                    done()
                })
        })
    })
}

const deleteUser = () => {
    describe('Testing POST/CREATE method for user', () => {
        it('Expecting deleting a user', (done) => {

        })

    })
}

describe('TESTING THE USER_API ROUTE', () => {
    testingNonExistentRoute()
    createUser()
    updateUser()
})