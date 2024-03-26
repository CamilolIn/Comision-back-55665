const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport')


const initializePassport = () => {
  passport.use('jwt', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: 'coderSecrect'
  }, async (jwt_payload, done) => {
    try {
      return done(null, jwt_payload)
    } catch (err) {
      return done(null, err)
    }
  }))
}

const passportCall = (st) => {
  return async (req, res, next) => {
    passport.authenticate(st, function (err, user, info) {
      console.log(info)
      if (err) return next(err)
      if (!user) {
        return res.status(401).send({
          error: info.messages ? info.messages : info.toString()
        })
      }
      req.user = user
      next()
    })(req, res, next)
  }
}

const cookieExtractor = (req) => {
  let token = null
  if (req && req.cookies) {
    token = req.cookies['cookieToken']
  }
  return token
}

const authorization = (role) => {
  return async (req, res, next) => {
    console.log(req.user)
    if (!req.user) return res.status(401).send({ error: 'unauthorized' })
    if (req.user.role != role) return res.status(403).send({ error: 'no permissions' })
    next()
  }
}



module.exports = { initializePassport, passportCall, authorization }