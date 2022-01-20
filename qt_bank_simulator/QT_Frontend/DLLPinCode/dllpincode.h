#ifndef DLLPINCODE_H
#define DLLPINCODE_H

#include "DLLPinCode_global.h"
#include <QDebug>
#include "engine.h"
#include <QObject>

class DLLPINCODE_EXPORT DLLPinCode
{
public:
    DLLPinCode();
    void openAndRead();
    void readPorts();
    void lahetaSignaali();

public slots:
    void receiveFromEngine(QString);

private:
    engine *engine;
    QString cardnumber;

signals:
    void sendSignalToExe(QString);
};

#endif // DLLPINCODE_H
