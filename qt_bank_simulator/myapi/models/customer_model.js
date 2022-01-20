const db = require('../database');

const customer = {
  getById: function(id, callback) {
    return db.query('select * from asiakas where idAsiakas=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from asiakas', callback);
  },

  /*getByIdaction: function(id, callback){
      return db.query('select * from tilitapahtuma where idTilitapahtuma=?', [id], callback);
  },

  getAllactions: function(callback) {
      return db.query('select * from tilitapahtuma', callback);
  },*/

  add: function(asiakas, callback) {
    return db.query(
      'insert into asiakas (Enimi,Snimi,puhnro) values(?,?,?)',
      [asiakas.Enimi, asiakas.Snimi, asiakas.puhnro],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from asiakas where idAsiakas=?', [id], callback);
  },
  update: function(id, asiakas, callback) {
    return db.query(
      'update asiakas set Enimi=?,Snimi=?, puhnro=? where idAsiakas=?',
      [asiakas.Enimi, asiakas.Snimi, asiakas.puhnro, id],
      callback
    );
  },
};
module.exports = customer; 