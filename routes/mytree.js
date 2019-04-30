const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const Individual = require('../models/individual');

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');

router.get('/', isLoggedIn(), (req, res, next) => {
  const {_id } = req.session.currentUser;
  Individual.find({ userId: req.session.currentUser._id })
    .then ((individuals) => {
      res.status(200).json({
        individuals
      });
    })
  
});

router.post(
  '/newIndividual', 
  isLoggedIn(), 
  async (req, res, next) => {
    const { _id } = req.session.currentUser;
    const { 
      firstName,
      secondFirstName,
      lastName,
      secondLastName,
      gender,
      dateOfBirth,
      placeOfBirth,
      gotMarried,
      partner,
      dateOfWedding,
      placeOfWedding,
      isDead,
      placeOfDeath,
      dateOfDeath,
      parents,
      profession,
      userId,
    } = req.body;
    
    try {
      const newIndividual = 
      await Individual.create({ 
        firstName,
        secondFirstName,
        lastName,
        secondLastName,
        gender,
        dateOfBirth,
        placeOfBirth,
        gotMarried,
        partner,
        dateOfWedding,
        placeOfWedding,
        isDead,
        placeOfDeath,
        dateOfDeath,
        parents,
        profession,
        userId : _id,
      });
      res.status(200).json(newIndividual);
    } 
    catch (error) {
    next(error);
    }
  }
);

module.exports = router;