const db = require('../database');

const login={
  checkPINkoodi: function(kortinnumero, callback) {
      return db.query('SELECT PINkoodi FROM kortti WHERE Kortinnumero = ?',[kortinnumero], callback); 
    },
};
          
module.exports = login;