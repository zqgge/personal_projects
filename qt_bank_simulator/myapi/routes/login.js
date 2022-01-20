const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');

router.post('/', 
  function(request, response) {
    if(request.body.kortinnumero && request.body.PINkoodi){
      const kortinnumero = request.body.kortinnumero;
      const PINkoodi = request.body.PINkoodi;
        login.checkPINkoodi(kortinnumero, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(PINkoodi,dbResult[0].PINkoodi, function(err,compareResult) {
                if(compareResult) {
                  console.log("success");
                  response.send(true);
                }
                else {
                    console.log("wrong password");
                    response.send(false);
                }			
              }
              );
            }
            else{
              console.log("user does not existsas");
              response.send("nocard");
            }
          }
          }
        );
      }
    else{
      console.log("card or pincode missing");
      response.send(false);
    }
  }
);

module.exports=router;