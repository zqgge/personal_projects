const express = require('express');
const router = express.Router();
const card = require('../models/card_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    card.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    card.get(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

router.post('/', 
function(request, response) {
  card.add(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body); 
    }
  });
});

router.delete('/:id', 
function(request, response) {
  card.delete(request.params.id, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(count);
    }
  });
});


router.put('/:id', 
function(request, response) {
  card.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;