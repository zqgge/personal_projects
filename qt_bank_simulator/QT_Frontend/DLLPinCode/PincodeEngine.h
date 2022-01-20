#ifndef PINCODEENGINE_H
#define PINCODEENGINE_H

#include <QDialog>

namespace Ui
{class pincodewindow;
}

class PincodeEngine : public QDialog
{
    Q_OBJECT

public:
    explicit PincodeEngine(QWidget *parent = nullptr);
    ~PincodeEngine();
    QString getPinCode();
    void sendMessage(QString);

private slots:
    void on_OkButton_clicked();
    void on_CancelButton_clicked();
    void on_B1_clicked();
    void on_B2_clicked();
    void on_B3_clicked();
    void on_B4_clicked();
    void on_B5_clicked();
    void on_B6_clicked();
    void on_B7_clicked();
    void on_B8_clicked();
    void on_B9_clicked();
    void on_B10_clicked();
    void on_B11_clicked();

private:
    Ui::pincodewindow * ui;
    QString cardnumber;
    QString pinchar;
    QString pincode;
    QString choppedText;

signals:
    void PincodeCanceled(int);
};

#endif // PINCODEENGINE_H
