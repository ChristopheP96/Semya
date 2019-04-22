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
  res.status(200).json({
    message: 'This is my familytree',
  });
});

module.exports = router;