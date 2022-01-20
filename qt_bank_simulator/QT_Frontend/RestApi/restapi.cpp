#include "restapi.h"

RestApi::RestApi()
{

}

RestApi::~RestApi()
{

}

        // HAETAAN OMISTAJAN TIEDOT TIETOKANNASTA //
void RestApi::omistajatiedot(QString id)
{
    QJsonObject json; //luodaan JSON objekti ja lisätään data
    json.insert("idTili", id);
    QString site_url="http://localhost:3000/actions/omistajatiedot";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    omistajaManager = new QNetworkAccessManager(this);
    connect(omistajaManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(omistajatiedotSlot(QNetworkReply*)));
    omistajaReply = omistajaManager->post(request, QJsonDocument(json).toJson());
}

void RestApi::omistajatiedotSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();
    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonArray json_array=json_doc.array();
    QString omistaja;
    foreach(const QJsonValue &value, json_array){
        QJsonObject json_object=value.toObject();
        omistaja+=json_object["omistajatiedot"].toString();
    }
    emit sendomistajatiedot(omistaja);
}

        // TARKISTETAAN SALDO TIETOKANNASTA //
void RestApi::on_saldo_check(QString id)
{
    QJsonObject json; //luodaan JSON objekti ja lisätään data
    json.insert("idTili",id); // tilin id
    QString site_url="http://localhost:3000/actions/viisitapahtumaa";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    saldoManager = new QNetworkAccessManager(this);
    connect(saldoManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(saldoSlot(QNetworkReply*)));
    saldoReply = saldoManager->post(request, QJsonDocument(json).toJson());
}

void RestApi::saldoSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();
    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonArray json_array=json_doc.array();
    QString saldoust;
    foreach(const QJsonValue &value, json_array){
        QJsonObject json_object=value.toObject();
        saldoust=QString::number((json_object["amount"].toInt()))+" "+json_object["date"].toString()+" "+json_object["tyyppi"].toString()+"\r\n";
        emit sendSaldo(saldoust);
    }
    saldoReply->deleteLater();
    reply->deleteLater();
    saldoManager->deleteLater();

}

        // TILITAPAHTUMA FUNKTIO, hakurivi MERKKAA MILTÄ RIVILTÄ ALOITETAAN TIEDON HAKU TILITAPAHTUMISTA, id MILTÄ TILILTÄ

void RestApi::on_tapahtuma_check(int hakurivi, QString id)
{
    QJsonObject json; //luodaan JSON objekti ja lisätään data
    json.insert("maara", hakurivi); // määrittää miltä riviltä tilitapahtumat alkaa
    json.insert("idTili",id); // tilin id
    QString site_url="http://localhost:3000/actions/tilitapahtumat";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    tapahtumatManager = new QNetworkAccessManager(this);
    connect(tapahtumatManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(tapahtumatSlot(QNetworkReply*)));
    tapahtumatReply = tapahtumatManager->post(request, QJsonDocument(json).toJson());
}

void RestApi::tapahtumatSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();
    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonArray json_array=json_doc.array();
    QString tapahtumat;
    int listCount = 0;
    foreach(const QJsonValue &value, json_array){
        QJsonObject json_object=value.toObject();
        tapahtumat=QString::number((json_object["amount"].toInt()))+" "+json_object["date"].toString()+" "+json_object["tyyppi"].toString();
        emit sendTapahtumat(tapahtumat);
        listCount += 1;
    }
    if (listCount < 2){
    emit sendTapahtumat("");}

    tapahtumatReply->deleteLater();
    reply->deleteLater();
    tapahtumatManager->deleteLater();
}



        // HAETAAN KORTTIIN LIITETTY TILIN ID TIETOKANNASTA
void RestApi::on_nosto_check(QString kortti)
{
    QJsonObject json; //luodaan JSON objekti ja lisätään data
    json.insert("kortinnumero",kortti); // asiakkaantili
    QString site_url="http://localhost:3000/actions/postIDtili";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    tiliManager = new QNetworkAccessManager(this);
    connect(tiliManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(tiliSlot(QNetworkReply*)));
    tiliReply = tiliManager->post(request, QJsonDocument(json).toJson());
}
void RestApi::tiliSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();
    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonArray json_array=json_doc.array();
    QString idTili;
    foreach(const QJsonValue &value, json_array){
        QJsonObject json_object=value.toObject();
        idTili+=QString::number((json_object["idTili"].toInt()));
    }
    emit sendIDtili(idTili);
}


        // NOSTOTAPAHTUMA
void RestApi::nostoFunktio(QString id, QString amount)
{
    QJsonObject json; //luodaan JSON objekti ja lisätään data
    json.insert("id",id); // asiakkaantili
    json.insert("amount",amount); // kuinka paljon nostetaan
    QString site_url="http://localhost:3000/actions/money_action";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    nostoManager = new QNetworkAccessManager(this);
    connect(nostoManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(nostoSlot(QNetworkReply*)));
    nostoReply = nostoManager->post(request, QJsonDocument(json).toJson());
}

void RestApi::nostoSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();
    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonObject json_object=json_doc.object();
    QString nosto = QString::number((json_object["affectedRows"].toInt()));

    emit sendNosto(nosto);

    nostoReply->deleteLater();
    reply->deleteLater();
    nostoManager->deleteLater();
}

    // KORTIN LUKITSEMINEN
void RestApi::korttipoisto(QString kortti)
{
    QString site_url="http://localhost:3000/card/"+kortti;
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,"application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    korttiManager = new QNetworkAccessManager(this);
    connect(korttiManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(korttipoistoSlot(QNetworkReply*)));
    korttiReply = korttiManager->deleteResource(request);
}

void RestApi::korttipoistoSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();
    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonObject json_object=json_doc.object();

    korttiReply->deleteLater();
    reply->deleteLater();
    korttiManager->deleteLater();
}

    // HAETAAN ID
void RestApi::haeIDtilinumerolla(QString tilinumero)
{
    QJsonObject json; //luodaan JSON objekti ja lisätään data
    json.insert("tilinumero",tilinumero); // asiakkaantili
    QString site_url="http://localhost:3000/actions/idtilinumero";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    tilinumeroManager = new QNetworkAccessManager(this);
    connect(tilinumeroManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(haeIDtilinumerollaSlot(QNetworkReply*)));
    tilinumeroReply = tilinumeroManager->post(request, QJsonDocument(json).toJson());
}

void RestApi::haeIDtilinumerollaSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();


    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonArray json_array=json_doc.array();
    QString idTili;
    //String setti;
    foreach(const QJsonValue &value, json_array){
        QJsonObject json_object=value.toObject();
        idTili+=QString::number((json_object["idTili"].toInt()));
     }

    emit sendIDtilinumerolla(idTili);

    tilinumeroManager->deleteLater();
    reply->deleteLater();
    tilinumeroReply->deleteLater();
}

    // RAHAN SIIRTO

void RestApi::rahansiirto(QString id, QString id2, int maara)
{
    QJsonObject json; //luodaan JSON objekti ja lisätään data
    json.insert("id",id); // asiakkaantili
    json.insert("id2",id2); // asiakkaantili
    json.insert("maara",maara); // asiakkaantili
    QString site_url="http://localhost:3000/actions/rahansiirto";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    siirtoManager = new QNetworkAccessManager(this);
    connect(siirtoManager, SIGNAL(finished(QNetworkReply*)), this, SLOT(rahansiirtoSlot(QNetworkReply*)));
    siirtoReply = siirtoManager->post(request, QJsonDocument(json).toJson());
}

void RestApi::rahansiirtoSlot(QNetworkReply *reply)
{
    QByteArray response_data=reply->readAll();

    QJsonDocument json_doc=QJsonDocument::fromJson(response_data);
    QJsonObject json_object=json_doc.object();
    QString nosto = QString::number((json_object["affectedRows"].toInt()));

    emit sendRahansiirto(nosto);

    siirtoReply->deleteLater();
    reply->deleteLater();
    siirtoManager->deleteLater();
}
