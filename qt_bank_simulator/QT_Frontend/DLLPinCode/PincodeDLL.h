#ifndef PINCODEDLL_H
#define PINCODEDLL_H

#include "DLLPinCode_global.h"
#include <QDebug>
#include "PincodeEngine.h"
#include <QObject>


class DLLPINCODE_EXPORT PincodeDLL: public QObject{
    Q_OBJECT

public:
    PincodeDLL(QObject * parent = nullptr);
    ~PincodeDLL();
    void showwindow();
    void execwindow();
    void hidewindow();
    void closewindow();
    void sendMessage(QString);
    QString getPinCode();
    QString pinkoodi;

private slots:
    void PincodeCanceledSlot(int);

private:
    PincodeEngine * engine;
    QString cardnumber;

signals:
    void pincodeCanceledToExe(int);
};

#endif // PincodeDLL_H
