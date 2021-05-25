const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const User = require('../models/User');
const verifyToken  = require('../utils/verify-token');
const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

module.exports = Router()
  .post('/create', async (req, res, next) => {
    const password = bcrypt.hashSync(req.body.password, 10);

    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password,
      });
      
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .post('/login', async (req, res, next) => {
    try {
      const { token, user } = await User.authorize(req.body);
      
      res.cookie('session', token, {
        httpOnly: true,
        maxAge: ONE_DAY_IN_MS,
        sameSite: 'None',
        secure: true
      });

      res.send(user);
      console.log('YESS')
    } catch (err) {
      err.status = 401;
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      next(err);
    }
  })
  .get('/logout', async (req, res, next) => {
    res.clearCookie('session');
    res
      .status(200)
      .json({ success: true, message: 'Logged out succcessfully!' });
      console.log('loggedout')
  })
  .get('/:id', async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .put('/edit', verifyToken,async (req, res, next) => {
 console.log('hey')
   


 
      const { username } = req.user;
   
      const email = req.body.originalEmail;
      const newEmail = req.body.newEmail || email;
      const newUsername = req.body.newUsername || username
    
      const updatedUser = await User.findOneAndUpdate({email}, {
        username: newUsername,
        email: newEmail
      },{new: true})
    const token = jwt.sign(updatedUser.toJSON(), process.env.JWT_SECRET, {expiresIn: '24h'})
      
        res.cookie('session', token, {
        httpOnly: true,
        maxAge: ONE_DAY_IN_MS,
        // sameSite: 'Lax' | 'None' | 'Strict',
        sameSite:'None',
        secure: true
        });
        console.log(updatedUser)
        res.json({updatedUser, token});
  })

