#include "login.h"

login::login()
{
}

login::~login()
{
}


        // TARKISTETAAN KORTIN NUMERO JA PINKOODI TIETOKANNASTA //

void login::login_check(QString pinkoodi, QString kortinnumero)
{
    QJsonObject json;
    json.insert("kortinnumero",kortinnumero);
    json.insert("PINkoodi",pinkoodi);
    QString site_url="http://localhost:3000/login";
    QString credentials="automaatti:ryhma04";
    QNetworkRequest request((site_url)); request.setHeader(QNetworkRequest::ContentTypeHeader,
    "application/json");
    QByteArray data = credentials.toLocal8Bit().toBase64();
    QString headerData = "Basic " + data;
    request.setRawHeader( "Authorization", headerData.toLocal8Bit() );
    pinManager = new QNetworkAccessManager(this);
    connect(pinManager, SIGNAL(finished (QNetworkReply*)), this, SLOT(loginSlot(QNetworkReply*)));
    pinReply = pinManager->post(request, QJsonDocument(json).toJson());
}

void login::loginSlot(QNetworkReply *reply)
{
    response_data=reply->readAll();

    // Jos kortin numero ja pinkoodi matchaavat, annetaan lupa kirjautua pääkäyttöliittymään
    if(response_data=="true"){
        emit sendlogin(response_data);
    }

    // Jos korttia ei löydy tietokannasta, ilmoitetaan siitä aloituskäyttöliittymään
    else if (response_data == "nocard"){
        emit sendlogin(response_data);}


    // Jos kortti löytyy tietokannasta, mutta pinkoodi on väärä, ilmoitetaan siitä aloituskäyttöliittymään
    else {
        emit sendlogin(response_data);
    }

    pinReply->deleteLater();
    pinManager->deleteLater();

}
