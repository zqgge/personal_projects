#include "dllpincode.h"
#include <QDebug>

DLLPinCode::DLLPinCode(QObject * parent): QObject(parent){

   engine = new Engine(this);
   qDebug() << "dll luotu";
   connect(engine, SIGNAL(sendToInterface(QString)),
           this, SLOT(receiveFromEngine(QString)));
}

DLLSerialPort::~DLLSerialPort(){

    delete engine;
    engine = nullptr;
    qDebug() << "tuhottiin dll";

}

void DLLSerialPort::openAndRead(){
    engine->open();
}

void DLLSerialPort::readPorts(){
    engine->info();
}

void DLLSerialPort::receiveFromEngine(QString info){

    emit sendSignalToExe(info);
}
