#ifndef MENUWINDOW_H
#define MENUWINDOW_H

#include "dllrestapi.h"
#include <QDialog>
#include "mainwindow.h"
#include <QTimer>

namespace Ui {
class MenuWindow;
}

class MenuWindow : public QDialog
{
    Q_OBJECT


public:
    MenuWindow(QWidget *parent = nullptr);
    ~MenuWindow();

private:
    Ui::MenuWindow *ui;
    DLLRestApi *restapi;
    QTimer *timer;
    QTimer * menuTimer;
    QString cardforAPI;
    QString idTili;
    QString omistajatiedot;
    const int basicTime = 10000;
    const int menuTime = 30000;
    int hakurivi=0;
    QString idTilinumerolla;
    int ulos;

public slots:
    void receiveSaldo(QString);
    void receiveIDtili(QString);
    void receiveOmistaja(QString);
    void receiveNosto(QString);
    void receiveTapahtumat(QString);
    void on_saldo_pushButton_clicked();
    void on_tapahtumat_pushButton_clicked();
    void on_Nosto_pushButton_clicked();
    void on_ulos_pushButton_clicked();
    void receiveIDtilinumerolla(QString);
    void receiveRahansiirto(QString);

private slots: 
    void getCardNum(QString);
    void on_nosto_ulos_pushButton_clicked();
    void on_saldo_ulos_pushButton_clicked();
    void on_tapahtumat_ulos_pushButton_clicked();
    void on_prevTapahtumaButton_clicked();
    void on_nextTapahtumaButton_clicked();
    void on_twenty_pushButton_clicked();
    void on_forty_pushButton_clicked();
    void on_sixty_pushButton_clicked();
    void on_hundred_pushButton_clicked();
    void on_twohundred_pushButton_clicked();
    void on_fivehundred_pushButton_clicked();
    void on_luotto_pushButton_clicked();
    void on_siirto_ulos_pushButton_clicked();
    void on_siirto_pushButton_clicked();
};

#endif // MENUWINDOW_H
