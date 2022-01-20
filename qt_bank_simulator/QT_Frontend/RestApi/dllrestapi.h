#ifndef DLLRESTAPI_H
#define DLLRESTAPI_H

#include "RestApi_global.h"
#include <QObject>
#include "restapi.h"
#include "login.h"


class RESTAPI_EXPORT DLLRestApi: public QObject{
    Q_OBJECT

public:
    DLLRestApi(QObject * parent = nullptr);
    ~DLLRestApi();
    void login_check(QString, QString);
    void on_saldo_check(QString);
    void on_nosto_check(QString);
    void on_tapahtuma_check(int, QString);
    void nostoFunktio(QString, QString);
    void omistajatiedot(QString);
    void korttipoisto(QString);
    void idtilinumerolla(QString);
    void rahansiirto(QString, QString, int);

private:
    login * logino;
    RestApi * restapio;

private slots:
    void receiveFromLogin(QString);
    void receiveNostoRestapi(QString);
    void receiveSaldoRestapi(QString);
    void receiveIDtili(QString);
    void receiveOmistajaTiedot(QString);
    void receiveTapahtumat(QString);
    void receiveIDtilinumerolla(QString);
    void receiveRahansiirto(QString);

signals:
    void sendlogin(QString);
    void sendSaldoToExe(QString);
    void sendNostoToExe(QString);
    void sendOmistajaTiedotToExe(QString);
    void sendIDtiliToExe(QString);
    void sendTapahtumatToExe(QString);
    void sendIDtilinumerollaToExe(QString);
    void sendRahansiirtoToExe(QString);
};

#endif // DLLRESTAPI_H
