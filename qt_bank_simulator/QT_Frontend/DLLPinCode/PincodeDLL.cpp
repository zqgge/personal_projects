#include "PincodeDLL.h"
#include <QDebug>

PincodeDLL::PincodeDLL(QObject * parent): QObject(parent){

   qDebug() << "pincode interface luotu";
   engine = new PincodeEngine;
   connect(engine, SIGNAL(PincodeCanceled(int)),
           this, SLOT(PincodeCanceledSlot(int)));
}

PincodeDLL::~PincodeDLL(){

    delete engine;
    engine = nullptr;
    qDebug() << "tuhottiin pincode interface";

}


void PincodeDLL::showwindow(){
    qDebug() << "showataan pincoodiwindow";
    engine->show();
    engine->exec();
}

void PincodeDLL::execwindow(){
}

void PincodeDLL::hidewindow(){
    engine->hide();
}

void PincodeDLL::closewindow(){
    engine->close();
}

QString PincodeDLL::getPinCode(){
    pinkoodi = engine->getPinCode();
    return pinkoodi;
}

void PincodeDLL::PincodeCanceledSlot(int canceled){
    qDebug() << canceled;
    qDebug() << "canceled signal vastaanotettu pincode interfacessa";
    emit pincodeCanceledToExe(canceled);
}

void PincodeDLL::sendMessage(QString message)
{
    engine->sendMessage(message);
}
