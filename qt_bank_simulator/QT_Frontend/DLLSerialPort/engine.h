#ifndef ENGINE_H
#define ENGINE_H

#include <QObject>
#include <QtSerialPort/QSerialPort>
#include <QList>


class Engine: public QObject{
    Q_OBJECT

public:
    Engine(QObject * parent = nullptr);
    ~Engine();
    void open();
    QString returnCard();

private:
    QSerialPort * PSerialPort;
    QString card;

signals:
    void sendToInterface(QString);
};

#endif // ENGINE_H
