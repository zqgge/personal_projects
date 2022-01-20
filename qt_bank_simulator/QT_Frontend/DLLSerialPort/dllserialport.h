#ifndef DLLSERIALPORT_H
#define DLLSERIALPORT_H

#include "DLLSerialPort_global.h"
#include <QDebug>
#include "engine.h"
#include <QObject>


class DLLSERIALPORT_EXPORT DLLSerialPort: public QObject{
    Q_OBJECT

public:
    DLLSerialPort(QObject * parent = nullptr);
    ~DLLSerialPort();
    void openAndRead();

private slots:
    void receiveFromEngine(QString);

private:
    Engine *engine;
    QString cardnumber;

signals:
    void sendSignalToExe(QString);
};

#endif // DLLSERIALPORT_H
