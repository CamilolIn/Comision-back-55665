import express from "express";
import passport from 'passport'
import './passport/github.js'
import {router} from './router/github.js'
import {routerJWT} from './router/jwtAuth.js'
import jwt from 'jsonwebtoken'


const app = express();

app.use(passport.initialize())

app.use('/auth', router)
app.use('/authjwt', routerJWT)



app.listen(8080, () => console.log(`server in http://localhost:8080`));