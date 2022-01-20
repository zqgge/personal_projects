#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow){
    qDebug() << "MainWindow luotu";
    ui->setupUi(this);

    Pinterface = new DLLSerialPort(this);                           // DLLSerialPort - Kortin numeron palautus -signaalin yhidstäminen
    connect(Pinterface, SIGNAL(sendSignalToExe(QString)),
            this, SLOT(receiveSignalFromDLL(QString)));
    pincodedll = new PincodeDLL;                                    // DLLPincode - Pinkoodin palautus -signaalin yhdistäminen
    connect(pincodedll, SIGNAL(pincodeCanceledToExe(int)),
            this, SLOT(PincodeCanceledSlot(int)));
    restapi = new DLLRestApi();                                     // DLLRestAPI - Tunnusten tarkistus tietokannasta -signaalin yhdistäminen
    connect(restapi, SIGNAL(sendlogin(QString)),
            this, SLOT(receivelogin(QString)));


    readDone = 0;    // 0 = Korttia ei ole vielä luettu, 1 = Kortti on jo luettu
    login_tried = 0;    // Pinkoodia on yritetty login_tried -kerran

    //Asetetaan ikkuna koko ruudulle
    this->setWindowState(Qt::WindowMaximized);
    this->setWindowFlags(Qt::CustomizeWindowHint | Qt::FramelessWindowHint);

    // Annetaan sovellukselle 1 sec aikaa käynnistyä ennen kortin odottamista
    timer = new QTimer(this);
        connect(timer, SIGNAL(timeout()), this, SLOT(started()));
        timer->start(1000);

}


MainWindow::~MainWindow(){

    delete ui;
    delete Pinterface;
    delete timer;
    timer = nullptr,
    Pinterface = nullptr;
}

     ////////////////////////////////////////////
    // SUORITETAAN KUN SOVELLUS ON KÄYNNISTYNYT //
     ////////////////////////////////////////////
void MainWindow::started()
{
    // Tarkistetaan onko kortti jo luettu
    if (readDone == 0){
        // Jos Pinkoodia on kokeiltu liian monta kertaa, palataan kortin lukitsemisen jälkeen odottamaan uutta korttia
        if (login_tried == 0){
            // Luetaan kortti
            Pinterface->openAndRead();
                                                    //cardnumber = "1234567890";  //DEBUG TESTI KORTTI POISTA TÄÄ
        // Tarkistetaan onko kortilla yritetty aiemmin pinkoodia ja montako kertaa edellisen kirjautumisen jälkeen
        if (cardnumber == prevCard){
            login_tried = prevLogin_tried;
            login = QString::number(prevLogin_tried-1);
            messageToPinWindow = "Pinkoodi väärin. "+login+" yritystä jäljellä";
        }
     }

    // Mikäli pinkoodia on yritetty väärin 3 kertaa, lukitaan kortti ja ilmoitetaan käyttäjälle
    if (login_tried > 2){
        messageToPinWindow = "Liian monta virheellistä yritystä. Kortti on lukittu";
        restapi->korttipoisto(cardnumber);
    }

    // Avataan pinkoodi-käyttöliittymä
    pincodedll->sendMessage(messageToPinWindow);
    pincodedll->showwindow();

    // Haetaan syötetty pinkoodi tarkistusta varten
    pincode = pincodedll->getPinCode();

    // Tarkistetaan onko kortti ja pinkoodi ok (tarkastuksen tulos käsitellään receivelogin -funktiossa)
    restapi->login_check(pincode, cardnumber);
    readDone = 1;
    }
}


    //   KORTIN JA PINKOODIN TARKASTUKSEN TULOSTEN KÄSITTELY:
   //    - 1. KORTTI JA PINKOODI OK = SIIRRYTÄÄN PÄÄKÄYTTÖLIITTYMÄÄN
   //    - 2. KORTTI LUKITTU = PALATAAN ALKUKÄYTTÖLIITTYMÄÄN ODOTTAMAAN UUTTA KORTTIA
   //    - 3. KORTTI OK, MUTTA PINKOODI VÄÄRIN = PALATAAN ALOITUSKÄYTTÖLIITTYMÄN KAUTTA ODOTTAMAAN OIKEAA PINKOODIA

void MainWindow::receivelogin(QString data){

    // 1. Kirjautuminen OK: Siirrytään pääkäyttöliittymään
    if (data == "true"){
        login_tried = 0;
        pincodedll->closewindow();
        delete pincodedll;
        pincodedll = nullptr;

        // Lähetetään kortin numero pääkäyttöliittymään
        MenuWindow*  menui = new MenuWindow;
        connect(this, SIGNAL(sendCardNum(QString)), menui, SLOT(getCardNum(QString)));
        emit sendCardNum(cardnumber);

        // Vaihdetaan käyttöliittymää
        menui->show();
        menui->exec();
        this->close();
    }

    // 2. Kortti ei käytössä: palataan alkuun odottamaan uutta korttia
    else if (data == "nocard"){
        ui->label->setText("Kortti ei ole käytössä");
        messageToPinWindow = "Kortti ei ole käytössä";
        pincodedll->closewindow();
        readDone = 0;
        login_tried = 0;
    }


    // 3. Pinkoodi väärin: Ilmoitetaan siitä käyttäjälle ja palataan kysymään oikeaa Pinkoodia samalla kortilla
    else{
        readDone = 0;
        login_tried += 1;
        login = QString::number(3-login_tried);
        messageToPinWindow = "Pinkoodi väärin. "+login+" yritystä jäljellä";
    }
}



    // KORTIN NUMERON TALTEENOTTO SIGNAALISTA //

void MainWindow::receiveSignalFromDLL(QString returnCard){

cardnumber = returnCard;
qDebug() << cardnumber;

ui->label->setText("Kirjaudutaan sisään.. Anna pinkoodi.");
}

   // KIRJAUTUMISEN PERUUTUS SIGNAALISTA //

void MainWindow::PincodeCanceledSlot(int canceled){
    // Otetaan talteen korttiin liittyvä pinkoodiyritysten määrä, jotta se jatkuu uudelleen kokeillessa
    prevCard = cardnumber;
    prevLogin_tried = login_tried;
    login_tried = canceled-1;
    ui->label->setText("Syötä kortti");
}
