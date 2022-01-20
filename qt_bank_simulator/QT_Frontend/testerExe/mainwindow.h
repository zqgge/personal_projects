#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include "dllserialport.h"
#include "PincodeDLL.h"
#include "menuwindow.h"
#include "dllrestapi.h"

QT_BEGIN_NAMESPACE
namespace Ui {
class MainWindow;
}
QT_END_NAMESPACE


class MainWindow;

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    DLLSerialPort * Pinterface;
    PincodeDLL * pincodedll;
    DLLRestApi *restapi;
    QTimer *timer;
    QString cardnumber;
    QString pincode;
    QString login;
    QString prevCard;
    int login_tried;
    int prevLogin_tried;
    QString messageToPinWindow;
    bool readDone;

private slots:
    void receiveSignalFromDLL(QString);
    void receivelogin(QString);
    void started();
    void PincodeCanceledSlot(int canceled);

signals:
    void sendCardNum(QString);
};
#endif // MAINWINDOW_H
