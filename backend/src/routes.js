const express = require('express')

const multer = require('multer')
const uploadConfig = require('./config/upload.js')
const login = require('./middleware/login')

import animal from './controllers/animalController'
import instituition from './controllers/instituitionController'
import signin from './controllers/signinController'
import signup from './controllers/signupController'
import dashboard from './controllers/dashboardController'

const uploadMiddleware = multer(uploadConfig)
const routes = express.Router()

routes.post('/add-animal',login, uploadMiddleware.single('image'), animal.createAnimal)

routes.post('/add-instituition',login, uploadMiddleware.single('image'),instituition.createInstituition)

routes.post('/signin', signin.logUser)

routes.post('/signup', signup.createUser)

routes.get('/dashboard',login, dashboard.allAnimals)



module.exports = routes