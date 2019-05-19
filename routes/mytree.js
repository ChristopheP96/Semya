const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const Individual = require('../models/individual');

const {
  isLoggedIn
} = require('../helpers/middlewares');

router.get('/', isLoggedIn(), (req, res, next) => {
  Individual.find({ userId: req.session.currentUser._id })
    .then ((individuals) => {
      res.status(200).json(
        individuals
      );
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
      dateOfWedding,
      placeOfWedding,
      isDead,
      placeOfDeath,
      dateOfDeath,
      profession,
      mother,
      father,
      son,
      daughter,
      husband,
      wife,
      individualIsUser
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
        dateOfWedding,
        placeOfWedding,
        isDead,
        placeOfDeath,
        dateOfDeath,
        profession,
        userId : _id,
        mother,
        father,
        son,
        daughter,
        husband,
        wife, 
        individualIsUser
      });
      res.status(200).json(newIndividual);
    } 
    catch (error) {
    next(error);
    }
  }
);

router.put('/:id/update', isLoggedIn(), (req, res, next) => {
    Individual.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true},
    function (err, user) {
      if (err) return res.status(500).send("There was a problem updating the user."); 
res.status(200).send(user);    
  })
})
    


router.post('/:id/delete', isLoggedIn(), (req, res, next) => {
  Individual.findByIdAndRemove({ _id: req.params.id})
    .then(Individual => {
      if(!Individual) {
          return res.status(404).send({
              message: "Individual not found with id " + req.params.id
          });
      }
      res.send({message: "Individual deleted successfully!"});
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
            message: "Individual not found with id " + req.params.id
        });                
    }
    return res.status(500).send({
        message: "Could not delete individual with id " + req.params.id
    });
});
})


router.get('/:id', isLoggedIn(), (req, res, next) => {
  Individual.find({ _id: req.params.id })
    .then ((individual) => {
      res.status(200).json(
        individual
      );
    })
});

module.exports = router;