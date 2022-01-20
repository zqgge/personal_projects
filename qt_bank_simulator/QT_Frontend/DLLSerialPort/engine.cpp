#include "engine.h"

Engine::Engine(QObject * parent): QObject(parent){

    PSerialPort = new QSerialPort;
}

Engine::~Engine(){
    delete PSerialPort;
    PSerialPort = nullptr;

}

        // ODOTETAAN KORTTIA JA LUETAAN KORTIN NUMERO //
void Engine::open(){

    PSerialPort->setPortName("COM3");
    PSerialPort->setBaudRate(9600);
    PSerialPort->setDataBits(QSerialPort::Data8);
    PSerialPort->setParity(QSerialPort::NoParity);
    PSerialPort->setStopBits(QSerialPort::OneStop);
    PSerialPort->setFlowControl(QSerialPort::HardwareControl);
    if(!PSerialPort->open(QIODevice::ReadWrite)){

    }
    else{
         // Odotetaan korttia
         PSerialPort->waitForReadyRead();
         // Luetaan kortin tiedot
         card = PSerialPort->readAll();
         // Poistetaan ylimääräiset merkit
         card.remove('-');card.remove('\r');card.remove('\n');card.remove('>');
         // Lähetetään kortin numero interfacelle ja sieltä exelle
         emit sendToInterface(card);
    }
    PSerialPort->close();
}


    // POHJA FUNKTIOLLE JOLLA VOIDAAN ETSIÄ SAATAVILLA OLEVAT SERIALPORTIT: //

/*QString Engine::info(){
        PSerialPort->setPortName("COM3");
        PSerialPort->setBaudRate(9600);
        PSerialPort->setDataBits(QSerialPort::Data8);
        PSerialPort->setParity(QSerialPort::NoParity);
        PSerialPort->setStopBits(QSerialPort::OneStop);
        PSerialPort->setFlowControl(QSerialPort::HardwareControl);
        qDebug() << PSerialPort->portName();
        if(!PSerialPort->open(QIODevice::ReadWrite)){
            qDebug() << "ei aukea" << Qt::endl;

        }
        else{
             qDebug() << "portti aukesi"<< Qt::endl;
             PSerialPort->waitForReadyRead();

             card = PSerialPort->readAll();
             card.remove('-');card.remove('\r');card.remove('\n');card.remove('>');
        }

        qDebug() << "suljetaan";
        PSerialPort->close();
        return card;

}
*/
