const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const card={
  get: function(callback) {
    return db.query('select * from kortti', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from kortti where idKortti=?', [id], callback);
  },
  add: function(card, callback) {
    bcrypt.hash(card.PINkoodi, saltRounds, function(err, hash) {
      return db.query('insert into kortti (idAsiakkaantili, Kortinnumero, PINkoodi) values(?,?,?)',
      [card.idAsiakkaantili, card.Kortinnumero, hash], callback);
    });
  },  
  delete: function(id, callback) {
    return db.query('delete from kortti where Kortinnumero=?', [id], callback);
  },
  update: function(id, card, callback) {
    bcrypt.hash(card.password, saltRounds, function(err, hash) {
      return db.query('update kortti set kortinnumero=?, PINkoodi=? where idKortti=?',
      [card.kortinnumero, hash, id], callback);
    });
  }
}
          
module.exports = card;