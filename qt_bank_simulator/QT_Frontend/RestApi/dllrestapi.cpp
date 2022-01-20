#include "dllrestapi.h"
#include <QDebug>

DLLRestApi::DLLRestApi(QObject * parent): QObject(parent){

   logino = new login;
   restapio = new RestApi;
   connect(logino, SIGNAL(sendlogin(QString)),
           this, SLOT(receiveFromLogin(QString)));
   connect(restapio, SIGNAL(sendSaldo(QString)),
           this, SLOT(receiveSaldoRestapi(QString)));
   connect(restapio, SIGNAL(sendNosto(QString)),
           this, SLOT(receiveNostoRestapi(QString)));
   connect(restapio, SIGNAL(sendIDtili(QString)),
           this, SLOT(receiveIDtili(QString)));
   connect(restapio, SIGNAL(sendomistajatiedot(QString)),
           this, SLOT(receiveOmistajaTiedot(QString)));
   connect(restapio, SIGNAL(sendTapahtumat(QString)),
           this, SLOT(receiveTapahtumat(QString)));
   connect(restapio, SIGNAL(sendIDtilinumerolla(QString)),
           this, SLOT(receiveIDtilinumerolla(QString)));
   connect(restapio, SIGNAL(sendRahansiirto(QString)),
           this, SLOT(receiveRahansiirto(QString)));
}

DLLRestApi::~DLLRestApi(){

    delete logino;
    logino = nullptr;
    delete restapio;
    restapio = nullptr;

}

void DLLRestApi::login_check(QString pinkoodi, QString kortinnumero){
    logino->login_check(pinkoodi, kortinnumero);
}

void DLLRestApi::receiveFromLogin(QString login){

    emit sendlogin(login);
}

void DLLRestApi::nostoFunktio(QString id, QString amount){
    restapio->nostoFunktio(id, amount);
}

void DLLRestApi::on_saldo_check(QString idtili){
    restapio->on_saldo_check(idtili);
}

void DLLRestApi::omistajatiedot(QString tilinID){
    restapio->omistajatiedot(tilinID);
}

void DLLRestApi::on_nosto_check(QString kortti){
    restapio->on_nosto_check(kortti);
}

void DLLRestApi::on_tapahtuma_check(int maara, QString id)
{
    restapio->on_tapahtuma_check(maara, id);
}

void DLLRestApi::korttipoisto(QString kortti)
{
    restapio->korttipoisto(kortti);
}

void DLLRestApi::receiveSaldoRestapi(QString saldo){

    emit sendSaldoToExe(saldo);
}

void DLLRestApi::receiveNostoRestapi(QString nosto){

    emit sendNostoToExe(nosto);
}

void DLLRestApi::receiveIDtili(QString idTili){
    emit sendIDtiliToExe(idTili);
}

void DLLRestApi::receiveOmistajaTiedot(QString omistajatiedot){

    emit sendOmistajaTiedotToExe(omistajatiedot);
}

void DLLRestApi::receiveTapahtumat(QString tapahtumat)
{
    emit sendTapahtumatToExe(tapahtumat);
}

void DLLRestApi::receiveIDtilinumerolla(QString idTili)
{
    emit sendIDtilinumerollaToExe(idTili);
}

void DLLRestApi::idtilinumerolla(QString tilinumero)
{
    restapio->haeIDtilinumerolla(tilinumero);
}

void DLLRestApi::rahansiirto(QString id, QString id2, int alkurivi)
{
    restapio->rahansiirto(id,id2,alkurivi);
}

void DLLRestApi::receiveRahansiirto(QString siirto)
{
    emit sendRahansiirtoToExe(siirto);
}
