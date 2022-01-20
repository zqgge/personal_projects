const express = require('express');
const router = express.Router();
const customer = require('../models/customer_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    customer.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult[0]);
        //palautetaan json objekti eli ainoa alkio // yksi tulos
      }
    });
  } else {
    customer.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
        // täältä tulee kaikki joten ei [0]
      }
    });
  }
});


router.post('/', 
function(request, response) {
  customer.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json("customer added");
    }
  });
});


router.delete('/:id', 
function(request, response) {
  customer.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  customer.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      if(dbResult.affectedRows==1){
          response.json("customer updated!");
      }
      else{
          response.json("customer does not exist..");
      }
    }
  });
});

/*
router.get('/getaction/:id?',
 function(request, response) {
  if (request.params.id) {
    customer.getByIdaction(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult[0]);
        //palautetaan json objekti eli ainoa alkio // yksi tulos
      }
    });
  } else {
    customer.getAllactions(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
        // täältä tulee kaikki joten ei [0]
      }
    });
  }
}); */

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    customer.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult[0]);
        //palautetaan json objekti eli ainoa alkio // yksi tulos
      }
    });
  } else {
    customer.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
        // täältä tulee kaikki joten ei [0]
      }
    });
  }
});

module.exports = router;