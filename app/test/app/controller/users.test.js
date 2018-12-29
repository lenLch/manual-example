const mock = require('egg-mock')
const assert = require('assert')

describe('test/app/controller/users.test.js', () => {
  let app
  before(() => {
    app = mock.app()
    return app.ready()
  })

  afterEach(mock.restore)

  it('should POST /api/users/register', async function() {
    app.mockService(register, 'list', [{
      content: 'Mock List',
    }])
    const r = await app.httpRequest()
      .post('/api/users/register')
      .expect(200)

    assert(Array.isArray(r.body))
    assert(typeof r.body[0].content === 'string')
  })
})