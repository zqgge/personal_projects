#include "menuwindow.h"
#include "ui_menuwindow.h"

MenuWindow::MenuWindow(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::MenuWindow)
{
    ui->setupUi(this);
    ui->stackedWidget->setCurrentIndex(0);
    restapi = new DLLRestApi;
    connect(restapi, SIGNAL(sendSaldoToExe(QString)),
            this, SLOT(receiveSaldo(QString)));
    connect(restapi, SIGNAL(sendIDtiliToExe(QString)),
            this, SLOT(receiveIDtili(QString)));
    connect(restapi, SIGNAL(sendOmistajaTiedotToExe(QString)),
            this, SLOT(receiveOmistaja(QString)));
    connect(restapi, SIGNAL(sendNostoToExe(QString)),
            this, SLOT(receiveNosto(QString)));
    connect(restapi, SIGNAL(sendTapahtumatToExe(QString)),
            this, SLOT(receiveTapahtumat(QString)));
    connect(restapi, SIGNAL(sendIDtilinumerollaToExe(QString)),
                this, SLOT(receiveIDtilinumerolla(QString)));
        connect(restapi, SIGNAL(sendRahansiirtoToExe(QString)),
                this, SLOT(receiveRahansiirto(QString)));


        // Alustetaan ajastin pääkäyttöliittymälle ja toimintoliittymille.
        // Jos tekemättömyys kestää määrätyn ajan, palataan edelliseen käyttöliittymään
      menuTimer = new QTimer(this);
                connect(menuTimer, SIGNAL(timeout()), this, SLOT(on_ulos_pushButton_clicked()));
                menuTimer->start(menuTime);

    ulos = 0;

    this->setWindowState(Qt::WindowMaximized);
        this->setWindowFlags(Qt::CustomizeWindowHint | Qt::FramelessWindowHint);

}

MenuWindow::~MenuWindow()
{
    delete ui;
    ui = nullptr;
    delete timer;
    menuTimer = nullptr;
}

         /*
         Pääkäyttöliittymän toiminnallisuudet:
         - pääkäyttöliittymän avautuminen
         - Saldo
         - Tilitapahtumat
         - Siirto
         */


        //  PÄÄKÄYTTÖLIITTYMÄ JA TILIN TIETOJEN HAKU:

// Kortin numero aloituskäyttöliittymästä
void MenuWindow::getCardNum(QString kortti)
{
    cardforAPI = kortti;
    restapi->on_nosto_check(cardforAPI);
}

// Tilin ID dllrestapista
void MenuWindow::receiveIDtili(QString tilinID)
{
    idTili = tilinID;
    restapi->omistajatiedot(idTili);
}

// Omistajan tiedot dllrestapista
void MenuWindow::receiveOmistaja(QString omistaja)
{
    omistajatiedot = omistaja;
    ui->nosto_label->setText(omistaja);
    ui->label->setText(omistaja);
}

// Saldo dllrestapista
void MenuWindow::receiveSaldo(QString salddo)
{
    ui->saldo_list->addItem(salddo);
}

// Uloskirjautuminen
void MenuWindow::on_ulos_pushButton_clicked()
{
    if (ulos==1){ui->stackedWidget->setCurrentIndex(0);ulos = 0;} // ohitetaan uloskirjautuminen
    else{
    // Palataan aloituskäyttöliittymään
    MainWindow *newmain = new MainWindow();
    newmain->show();
    delete menuTimer;
    menuTimer = nullptr;
    this->close();
    }
}


    // SALDO -KÄYTTÖLIITTYMÄ:

    // Saldo -käyttöliittymän avaaminen
void MenuWindow::on_saldo_pushButton_clicked()
{
    ulos = 1;
    menuTimer->start(basicTime);
    ui->stackedWidget->setCurrentIndex(2);
    ui->saldo_label->setText(omistajatiedot);
    restapi->on_saldo_check(idTili);
}

    // Pääkäyttöliittymään palaaminen
void MenuWindow::on_saldo_ulos_pushButton_clicked()
{
    ulos = 0;
    menuTimer->start(menuTime);
    ui->stackedWidget->setCurrentIndex(0);
}


    // TILITAPAHTUMAT -KÄYTTÖLIITTYMÄ:

    // Tilitapahtumat -käyttöliittymän avaaminen
void MenuWindow::on_tapahtumat_pushButton_clicked()
{
    ulos = 1;
    menuTimer->start(basicTime);
    ui->tapahtuma_label->setText(omistajatiedot);
    ui->stackedWidget->setCurrentIndex(3);
    restapi->on_tapahtuma_check(hakurivi, idTili);
    ui->nextTapahtumaButton->setEnabled(true);
}

    // Tilitapahtumien käsittely
void MenuWindow::receiveTapahtumat(QString tapahtumat)
{
    if(tapahtumat==""){
      ui->listWidget->addItem("Ei enempää tapahtumia");
      ui->prevTapahtumaButton->setEnabled(false);
    }
    else
    {
      ui->listWidget->addItem(tapahtumat);
      ui->prevTapahtumaButton->setEnabled(true);
    }
}

    // Seuraavien tilitapahtumien haku
void MenuWindow::on_nextTapahtumaButton_clicked()
{
    menuTimer->start(basicTime);
    if(hakurivi >= 10){
        ui->listWidget->clear();
    hakurivi = hakurivi - 10;
    restapi->on_tapahtuma_check(hakurivi, idTili);
    }
}

    // Aiempien tilitapahtumien haku
void MenuWindow::on_prevTapahtumaButton_clicked()
{
    menuTimer->start(basicTime);
    ui->listWidget->clear();
    hakurivi= hakurivi + 10;
    restapi->on_tapahtuma_check(hakurivi, idTili);
    ui->nextTapahtumaButton->setEnabled(true);
}

    // Pääkäyttöliittymään palaaminen
void MenuWindow::on_tapahtumat_ulos_pushButton_clicked()
{
    menuTimer->start(menuTime);
    ui->stackedWidget->setCurrentIndex(0);
    connect(menuTimer, SIGNAL(timeout()), this, SLOT(on_ulos_pushButton_clicked()));
}



        // NOSTO -KÄYTTÖLIITTYMÄ:

    // Nosto -käyttöliittymän avaaminen
void MenuWindow::on_Nosto_pushButton_clicked()
{
    ulos =1;
    menuTimer->start(menuTime);
    ui->stackedWidget->setCurrentIndex(1);
}

    // Vahvistetaan noston onnistuminen ja ilmoitetaan käyttäjälle
void MenuWindow::receiveNosto(QString numero)
{
    if(numero=="1"){
       ui->nosto_label_2->setText("Nosto onnistui");
    }
    if(numero=="0"){
        ui->nosto_label_2->setText("Nosto epäonnistui");
    }
}

    // Palataan nostosta pääkäyttöliittymään
void MenuWindow::on_nosto_ulos_pushButton_clicked()
{
    menuTimer->start(menuTime);
    ui->stackedWidget->setCurrentIndex(0);
}

    // Nosto painikkeet:

void MenuWindow::on_twenty_pushButton_clicked()
{
    menuTimer->start(menuTime);
    restapi->nostoFunktio(idTili,"-20");
}

void MenuWindow::on_forty_pushButton_clicked()
{
    menuTimer->start(menuTime);
    restapi->nostoFunktio(idTili,"-40");
}

void MenuWindow::on_sixty_pushButton_clicked()
{
    menuTimer->start(menuTime);
    restapi->nostoFunktio(idTili,"-60");
}

void MenuWindow::on_hundred_pushButton_clicked()
{
    menuTimer->start(menuTime);
    restapi->nostoFunktio(idTili,"-100");
}

void MenuWindow::on_twohundred_pushButton_clicked()
{
    menuTimer->start(menuTime);
    restapi->nostoFunktio(idTili,"-200");
}

void MenuWindow::on_fivehundred_pushButton_clicked()
{
    menuTimer->start(menuTime);
    restapi->nostoFunktio(idTili,"-500");
}


 // TILISIIRRON PAINIKKEET

void MenuWindow::receiveIDtilinumerolla(QString idTili)
{
    idTilinumerolla = idTili;
}

void MenuWindow::receiveRahansiirto(QString siirto)
{
    if(siirto=="0")
    {
      ui->siirto_label_1->setText("Siirto ei onnistunut");
    }
    else
    {
        ui->siirto_label_1->setText("Siirto onnistui!");
    }
}


void MenuWindow::on_luotto_pushButton_clicked()
{
    ulos = 1;
    menuTimer->start(basicTime);
    ui->siirto_label_tiedot->setText(omistajatiedot);
    ui->stackedWidget->setCurrentIndex(4);
}

void MenuWindow::on_siirto_ulos_pushButton_clicked()
{
    menuTimer->start(menuTime);
    ui->stackedWidget->setCurrentIndex(0);
}

void MenuWindow::on_siirto_pushButton_clicked()
{
    menuTimer->start(basicTime);
    QString tilinumero = ui->siirto_lineEdit_tili->text();
    QString maara = ui->siirto_lineEdit_summa->text();
    restapi->idtilinumerolla(tilinumero);
    restapi->rahansiirto(idTili,idTilinumerolla,maara.toInt());
}
