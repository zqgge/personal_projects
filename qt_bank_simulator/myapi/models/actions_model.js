const db = require('../database');

const actions = {
    
    getByIdaction: function(id, callback){
        return db.query('select * from tilitapahtuma where idAsiakkaantili=?', [id], callback);
    },
  
    getAllactions: function(callback) {
        return db.query('select * from tilitapahtuma', callback);
    },
    moneyAction: function(procedure_params, callback) {
        return db.query(
          'CALL money_action (?, ?)',
          [procedure_params.id, procedure_params.amount],
          callback
        );
    },
    saldoAction: function(id, callback){
        return db.query('CALL saldo_action(?)', [id], callback);
    },
    kirjautuminen: function(id, callback){
        return db.query('CALL kirjautuminen(?)', [id], callback)
    },
    haeIDtili: function(id,callback){
        return db.query('CALL hae_idTili(?)', [id], callback);
    },

    postIDtili: function(procedure_param, callback) {
        return db.query(
            'CALL hae_idTili(?)',
            [procedure_param.kortinnumero], 
            callback
        );
    },
    omistajatiedot: function(procedure_param, callback) {
        return db.query(
            'CALL omistajatiedot(?)',
            [procedure_param.idTili], 
            callback
        );
    },
    viisitapahtumaa: function(procedure_param, callback) {
        return db.query(
            'CALL viisitapahtumaa(?)',
            [procedure_param.idTili], 
            callback
        );
    },
    tilitapahtumat: function(procedure_param, callback) {
        return db.query(
            'CALL tilitapahtumat(?, ?)',
            [procedure_param.maara, procedure_param.idTili], 
            callback
        );
    },
    rahansiirto: function(procedure_params, callback) {
        return db.query(
          'CALL rahansiirto (?, ?, ?)',
          [procedure_params.id, procedure_params.id2, procedure_params.maara],
          callback
        );
    },
    idtilinumerolla: function(procedure_params, callback) {
        return db.query(
          'CALL haeIDtilinumerolla (?)',
          [procedure_params.tilinumero],
          callback
        );
    },
};

module.exports = actions; 