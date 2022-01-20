#ifndef RESTAPI_H
#define RESTAPI_H

#include "RestApi_global.h"
#include <QtNetwork>
#include <QNetworkAccessManager>
#include <QJsonDocument>

class RESTAPI_EXPORT RestApi: public QObject{
    Q_OBJECT

public:
    RestApi();
    ~RestApi();
    void on_saldo_check(QString kortti);
    void on_tapahtuma_check(int maara, QString id);
    void on_nosto_check(QString kortti);
    void on_ulos_check();
    void nostoFunktio(QString id, QString amount);
    void saldoFunktio(QString id);
    void omistajatiedot(QString id);
    void korttipoisto(QString kortti);
    void rahansiirto(QString, QString, int);
    void haeIDtilinumerolla(QString);

private slots:
    void saldoSlot(QNetworkReply *reply);
    void nostoSlot(QNetworkReply *reply);
    void tiliSlot(QNetworkReply *reply);
    void omistajatiedotSlot(QNetworkReply *reply);
    void tapahtumatSlot(QNetworkReply *reply);
    void korttipoistoSlot(QNetworkReply *reply);
    void rahansiirtoSlot(QNetworkReply *reply);
    void haeIDtilinumerollaSlot(QNetworkReply *reply);

signals:
    void sendSaldo(QString);
    void sendNosto(QString);
    void sendIDtili(QString);
    void sendomistajatiedot(QString);
    void sendTapahtumat(QString);
    void sendIDtilinumerolla(QString);
    void sendRahansiirto(QString);

private:
    QNetworkAccessManager *saldoManager;
    QNetworkReply *saldoReply;

    QNetworkAccessManager *nostoManager;
    QNetworkReply *nostoReply;

    QNetworkAccessManager *tiliManager;
    QNetworkReply *tiliReply;

    QNetworkAccessManager *omistajaManager;
    QNetworkReply *omistajaReply;

    QNetworkAccessManager *tapahtumatManager;
    QNetworkReply *tapahtumatReply;

    QNetworkAccessManager *korttiManager;
    QNetworkReply *korttiReply;

    QNetworkAccessManager *tilinumeroManager;
    QNetworkReply *tilinumeroReply;

    QNetworkAccessManager *siirtoManager;
    QNetworkReply *siirtoReply;
};

#endif // RESTAPI_H
