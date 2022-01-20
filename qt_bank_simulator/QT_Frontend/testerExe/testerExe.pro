QT       += core gui
QT += network

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

CONFIG += c++11

# You can make your code fail to compile if it uses deprecated APIs.
# In order to do so, uncomment the following line.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

SOURCES += \
    main.cpp \
    mainwindow.cpp \
    menuwindow.cpp

HEADERS += \
    mainwindow.h \
    menuwindow.h

FORMS += \
    mainwindow.ui \
    menuwindow.ui

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target

win32:CONFIG(release, debug|release): LIBS += -L$$PWD/../build-DLLSerialPort-Desktop_Qt_5_15_2_MinGW_64_bit-Debug/release/ -lDLLSerialPort
else:win32:CONFIG(debug, debug|release): LIBS += -L$$PWD/../build-DLLSerialPort-Desktop_Qt_5_15_2_MinGW_64_bit-Debug/debug/ -lDLLSerialPort

INCLUDEPATH += $$PWD/../DLLSerialPort
DEPENDPATH += $$PWD/../DLLSerialPort

win32:CONFIG(release, debug|release): LIBS += -L$$PWD/../build-DLLPinCode-Desktop_Qt_5_15_2_MinGW_64_bit-Debug/release/ -lDLLPinCode
else:win32:CONFIG(debug, debug|release): LIBS += -L$$PWD/../build-DLLPinCode-Desktop_Qt_5_15_2_MinGW_64_bit-Debug/debug/ -lDLLPinCode

INCLUDEPATH += $$PWD/../DLLPinCode
DEPENDPATH += $$PWD/../DLLPinCode

win32:CONFIG(release, debug|release): LIBS += -L$$PWD/../build-Restapi-Desktop_Qt_5_15_2_MinGW_64_bit-Debug/release/ -lRestapi
win32: LIBS += -L$$PWD/../build-RestApi-Desktop_Qt_5_15_2_MinGW_64_bit-Debug/debug/ -lRestApi

INCLUDEPATH += $$PWD/../RestApi
DEPENDPATH += $$PWD/../RestApi
