#ifndef SALDO_H
#define SALDO_H

#include <QDialog>

#ifndef MENUWINDOW_H
#define MENUWINDOW_H

#include <QMainWindow>
#include "restapi.h"
#include <QDialog>

namespace Ui {
class SaldoWindow;
}

class SaldoWindow : public QDialog
{
    Q_OBJECT

public:
    explicit SaldoWindow(QWidget *parent = nullptr);
    ~SaldoWindow();

private:
    Ui::SaldoWindow *ui;
    RestApi * restapi;

public slots:
    //void receiveSaldo(QString);
    void on_saldo_pushButton_clicked();
    //void saldoSlot(QNetworkReply *reply);
    //void on_tapahtuma_pushButton_clicked();
    //void on_nosto_pushButton_clicked();
    //void on_ulos_pushButton_clicked();*/
};

#endif // MENUWINDOW_H


#endif // SALDO_H
