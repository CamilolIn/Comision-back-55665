import { Router } from "express";
import passport from 'passport'


const router = new Router()

router.get('/github',
  passport.authenticate('auth-github', { scope: ['user:email'], session:false }));

router.get('/github/callback',
  passport.authenticate('auth-github', { scope: ['user:email'], session:false}),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send(JSON.stringify(req.user))
  });

  export { router }
