const { Router } = require('express')
const { getAllSpices, createSpices } = require('../service/spice-service.js')
const authorizationMiddleware = require('../middleware/authorization-middleware.js')

const spiceRouter = Router()



spiceRouter.get('/', getAllSpices)
spiceRouter.post('/', authorizationMiddleware, createSpices)


module.exports = spiceRouter