#include "dllserialport.h"
#include <QDebug>

DLLSerialPort::DLLSerialPort(QObject * parent): QObject(parent){

   engine = new Engine(this);
   connect(engine, SIGNAL(sendToInterface(QString)),
           this, SLOT(receiveFromEngine(QString)));
}

DLLSerialPort::~DLLSerialPort(){
    delete engine;
    engine = nullptr;
}

void DLLSerialPort::openAndRead(){
    engine->open();
}


void DLLSerialPort::receiveFromEngine(QString info){
    emit sendSignalToExe(info);
}


