const express = require('express');
const router = express.Router();
const actions = require('../models/actions_model');


router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    actions.getByIdaction(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult[0]);
        //palautetaan json objekti eli ainoa alkio // yksi tulos
      }
    });
  } else {
    actions.getAllactions(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
        // täältä tulee kaikki joten ei [0]
      }
    });
  }
});

router.post('/money_action', 
function(request, response) {
  actions.moneyAction(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.get('/saldo_action/:id?', 
function(request, response) {
  actions.saldoAction(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0]);
    }
  });
});

router.get('/kirjautuminen/:id?', 
function(request, response) {
  actions.kirjautuminen(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0].id);
    }
  });
});

router.get('/haeIDtili/:id?', 
function(request, response) {
  actions.haeIDtili(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0]);
    }
  });
});

router.post('/postIDtili', 
function(request, response) {
  actions.postIDtili(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0]);
    }
  });
});

router.post('/omistajatiedot', 
function(request, response) {
  actions.omistajatiedot(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0]);
    }
  });
});

router.post('/viisitapahtumaa', 
function(request, response) {
  actions.viisitapahtumaa(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0]);
    }
  });
});

router.post('/tilitapahtumat', 
function(request, response) {
  actions.tilitapahtumat(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0]);
    }
  });
});

router.post('/rahansiirto', 
function(request, response) {
  actions.rahansiirto(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.post('/idtilinumero', 
function(request, response) {
  actions.idtilinumerolla(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult[0]);
    }
  });
});

module.exports = router;