#include "PincodeEngine.h"
#include "ui_PincodeEngine.h"
#include <QDebug>
#include <iostream>
#include <stdlib.h>


PincodeEngine::PincodeEngine(QWidget *parent)
    : QDialog(parent)
    , ui(new Ui::pincodewindow)
{
    ui->setupUi(this);
    this->setWindowState(Qt::WindowMaximized);
    this->setWindowFlags(Qt::CustomizeWindowHint | Qt::FramelessWindowHint);
    qDebug() << "luodaan pincode engine";
    this->width();

    ui->CancelButton->setStyleSheet("background-color: rgb(255,0,0);");
    ui->B11->setStyleSheet("background-color: rgb(255,255,0);");
    ui->OkButton->setStyleSheet("background-color: rgb(0,255,0);");

}

PincodeEngine::~PincodeEngine()
{
    qDebug() << "tuhotaan pincode engine";
    delete ui;
}

void PincodeEngine::sendMessage(QString message)
{
    ui->label_2->setText(message);
    if (message == "Liian monta virheellistä yritystä. Kortti on lukittu"){
        ui->label->setText("Kortti lukittu");
    }
}

void PincodeEngine::on_OkButton_clicked(){

   pincode = pinchar;
   pinchar = "";
   ui->lineEdit->setText("");
   this->close();
}

void PincodeEngine::on_CancelButton_clicked(){

    emit PincodeCanceled(0);
    qDebug() << "canceled signal emitted";
    pinchar = "";
    ui->lineEdit->setText("");
    this->close();
}

QString PincodeEngine::getPinCode(){
    ui->label_2->setText("");
    return pincode;
}

void PincodeEngine::on_B1_clicked(){

    pinchar += ui->B1->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B2_clicked(){

    pinchar += ui->B2->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B3_clicked(){

    pinchar += ui->B3->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B4_clicked(){

    pinchar += ui->B4->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B5_clicked(){

    pinchar += ui->B5->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B6_clicked(){

    pinchar += ui->B6->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B7_clicked(){

    pinchar += ui->B7->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B8_clicked(){

    pinchar += ui->B8->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B9_clicked(){

    pinchar += ui->B9->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B10_clicked(){

    pinchar += ui->B10->text();
    ui->lineEdit->setText(ui->lineEdit->text()+"*");

}
void PincodeEngine::on_B11_clicked(){

    pinchar.chop(1);
    choppedText = ui->lineEdit->text();
    choppedText.chop(1);
    ui->lineEdit->setText(choppedText);

}
