import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github2'

passport.use(
  'auth-github',
  new GitHubStrategy(
    {
      clientID: '3520c65ce205ed0ea82f',
      clientSecret: '58930e54e6b54ee657f539bd856b619c3c8f0ec6',
      callbackURL: "http://localhost:8080/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done){
      console.log(profile)
      done(null, profile)
    }
  )
)