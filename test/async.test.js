const {app} = require('../index')
const supertest = require('supertest')

test('Test get users API',async()=>{
    await supertest(app)
    .get('/users')
    .expect(200)
    .then(result=>{
        expect(result && result.body && typeof result.body === 'object')
    })
})