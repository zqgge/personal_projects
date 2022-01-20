#ifndef LOGIN_H
#define LOGIN_H

#include "RestApi_global.h"
#include <QObject>
#include <QtNetwork>
#include <QNetworkAccessManager>
#include <QJsonDocument>

class RESTAPI_EXPORT login: public QObject{
    Q_OBJECT

public:
    login();
    ~login();
    void login_check(QString, QString);
    QByteArray response_data;

private slots:
    void loginSlot(QNetworkReply *reply);

signals:
    void sendlogin(QString);

private:
    QNetworkAccessManager *pinManager;
    QNetworkReply *pinReply;
};


#endif // LOGIN_H
