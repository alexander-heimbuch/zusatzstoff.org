<!--
author: @zusatzstoff
description: Mac im Eigenbau (Hackintosh) - Hardware Konfiguration und notwendige Software
publish: 2014-09-06
cover: /static/hackintosh/hackintosh.jpg
comments: true
-->

Mac im Eigenbau (Hackintosh)
============================

### Updates

#### 10.04.2015

Seit Mac OS X Yosemite (10.10) ist eine problemfreie Installation mittels _Unibeast_ und _Multibeast_ nicht mehr möglich. Ein Umstieg auf die deutlich bessere Alternative Clover ist entsprechend sehr zu empfehlen, da dies zusätlich einige Probleme mit Multiboot sowie Reperaturinstallationen löst.

### 1 Disclaimer

Ein Disclaimer vorweg: Für die Installation wird eine legale Kopie von Mac OS X 10.10 (Yosemite) und damit implizit ein erworbener Mac benötigt. Obwohl bei der Auswahl der Hardware auf maximal mögliche Kompatibilität geachtet wurde, müssen trotzdem einige Treiber nachinstalliert werden. Es ist daher Anfängern davon abzuraten die ersten Schritte direkt in Mac OSX mit einem Hackintosh zu machen.
Weiterhin ist die Aktualisierbarkeit des Hackintoshs nicht gewährleistet. Sollte also der Hackintosh als Produktivsystem verwendet werden ist eine gute Backupstrategie absolut notwendig.


### 2 Auswahl der Hardware

Bei der Auswahl der Hardware habe ich mich auf die Empfehlungen von [tonymacx86.com](http://www.tonymacx86.com/section/295-customac.html) verlassen. Auf dieser Seite findet man alle notwendigen Informationen und Software für ein Hackintosh Projekt.

<div class="three-cols layer" style="background-image: url(../static/hackintosh/product_i5_4690.jpg)"><a href="http://www.amazon.de/Intel-Core-i5-4690K-Processor-Cache/dp/B00KPRWB9G/"><h3>Intel Core i5 4690K</h3></a></div>
<div class="three-cols layer" style="background-image: url(../static/hackintosh/product_z87x_ud3h.jpg)"><a href="http://www.amazon.de/Gigabyte-Z87X-UD3H-Mainboard-Sockel-Speicher/dp/B00CU4L508/"><h3>Gigabyte Z87X-UD3H</h3></a></div>
<div class="three-cols layer" style="background-image: url(../static/hackintosh/product_msi_n_760.jpg)"><a href="http://www.amazon.de/MSI-V284-081R-N760-Grafikkarte-DisplayPort/dp/B00DIH8OW8/"><h3>MSI Twin Frozr GTX 760</h3></a></div>
<div class="three-cols layer" style="background-image: url(../static/hackintosh/product_ballistix_sport.jpg)"><a href="http://www.amazon.de/dp/product/B007PNNTY4"><h3>16Gb Crucial Ballistix Sport</h3></a></div>
<div class="three-cols layer" style="background-image: url(../static/hackintosh/product_samsung_evo_840.jpg)"><a href="http://www.amazon.de/dp/product/B00E391OX6/"><h3>Samsung EVO 840 250GB</h3></a></div>
<div class="three-cols layer" style="background-image: url(../static/hackintosh/product_be_quiet.jpg)"><a href="http://www.amazon.de/quiet-Pure-Power-L8-CM-730W-Netzteil/dp/B005JRGVCK/"><h3>Be quiet! L8-CM-730W</h3></a></div><div class="clearfix"></div>

### 3 Vorbereitung

#### 3.1 Clover

Clover ist ein UEFI Bootloader, der sich direkt in die UEFI Partition des Bootmediums einklinkt und für einen Hackintosh die notwendige Umgebung simmuliert. Die Hardwareseitige Untestützung von UEFI ermöglicht es Clover ein sehr unangenehmes Ziel für Apple zu sein, da auch Apple ein sehr identisches System auf dem nativen Macs verwendet. Nebenbei ermöglicht Clover bspw. Treiber auf der UEFI Partition zu speichern und während des Bootvorgangs zu injezieren, was die Updatebarkeit des Hackintoshs extrem verbessert. Clover kann auf [Sourceforge](http://sourceforge.net/projects/cloverefiboot/) heruntergeladen werden.

#### 3.2 Bios Update

Bevor es losgehen kann, muss das Bios des Z87X-UD3H auf die Firmware F8m aktualisiert werden. Es ist wichtig, dass es exakt diese Version ist (nicht die F8 oder die F9 verwenden) da sich diese als äußerst stabil für Hackintosh Projekte herausgestellt hat. Die Firmware kann [hier heruntergeladen werden](http://www.mediafire.com/download/ph99v960sw0m9sd/Z87XUD3H.8m.zip). Zur Installation muss die Datei entpackt und auf einen FAT32 formatierten USB-Stick gespielt werden. Das Update kann dann im Bios (F12 beim booten) über Q-Flash (unter Save & Exit) durchgeführt werden. Nach dem Update sollten die "optimized defaults" geladen werden.

#### 3.3 Bios Einstellungen

Nach einem Neustart sollte das Bios dann wie folgt eingestellt werden [2]:

##### Peripherals
* XHCI Mode, auf AUTO setzen
* XHCI Hand-OFF, auf ENABLED setzen
* EHCI Hand-OFF, auf ENABLED setzen
* Internal Graphics deaktivieren
* Init Display First, auf den PCIe slot setzen in der die GTX 760 steckt

##### Power Management
* Wake on Lan, deaktivieren

#### 3.3 Hackintosh Installationsmedium erstellen [1]

Für die Installation von OSX wird, wie auch bei einem normalen Mac, natürlich ein Installationsmedium gebraucht. Dafür kann ein USB-Stick mit minimal 8GB Speicher verwendet werden.

// TODO: Link auf Yosemite aktualisieren
Die Basis für den Hackintosh Installer ist ein ganz normaler Mac OSX Bootstick. Für die Erstellung existieren zahlreiche Tutorials im Netz ([hier bspw.](http://www.macwelt.de/ratgeber/Mavericks-vom-USB-Stick-installieren-8294693.html)).

Nachdem der Installationsstick erstellt wurde, ist es als nächstes notwendig ihn mit Clover zu patchen. Hierfür wird das heruntergeladene Clover gestartet sowie das richtige Installationsmedium (der gerade präparierte USB Stick) ausgewählt. Anschließend sollte in der "Custom Installation" das Bootmedium mit folgenden Einstellungen gepatcht werden:

* _Bootloader_
** Install boot0af in MBR
* _CloverEFI_
** CloverEFI 64-bits SATA
* _Drivers64UEFI_
** EmuVariableUefi-64
** OsxAptioFixDrv-64
** PartitionDxe-64

Anschließend werden die Änderungen am Bootstick vorgenommen, was einige Minuten in Anspruch nehmen kann.

Nach der Anpassung des Installationssticks sind noch einige weitere Schritte notwendig. Hierbei geht es darum fehlende Treiber sowie eine Konfiguration zu der EFI Partition des USB Sticks hinzuzufügen:

// TODO: Installer Zip packen
* Ersetzt in /EFI/CLOVER/ die standard config.plist mit dieser hier
* Sollte unter /EFI/CLOVER/kexts/ kein Ordner namens 10.10 existieren, erstellt ihn
* Entpackt die folgende Datei und verschiebt die Dateien in den Ordner /EFI/CLOVER/kexts/10.10

// TODO: Konfigurationsdatei Clover sowie Treiber hinzufügen
Zuletzt sollte für die spätere Installation Clover an sich, sowie folgende Dateien mit auf den Stick kopiert werden:

### 4 Installation

#### 4.1 Bootmedium einstellen

Zunächst muss der USB-Stick als Bootmedium im Bios unter “Bios Features > Boot Options” ausgewählt werden. Der USB-Stick sollte mit *P* anfangen. Es ist wichtig den Stick im UEFI Modus zu booten. Zuletzt müssen die Änderungen gespeichert werden.

#### 4.2 Mac OSX Installer starten [4]

Wenn alles eingestellt wurde, sollte im Anschluss der Clover Boot Screen erscheinen. Als Startmethode sollte bei einer Neuinstallation "Boot OS X Install from OS X Install OS X Yosemite" ausgewählt werden. Unter Umständen kann es Probleme beim ausführen des Installers geben, dann ist es eventuell notwendig weitere Parameter zum starten anzugeben:

> -x

Sollte der Bildschirm schwarz bleiben ist es wahrscheinlich, dass die Grafikkarte nicht ohne Weiteres unterstützt wird, dann können folgende Optionen nützlich sein:

> GraphicsEnabler=Yes/No IGPEnabler=Yes/No
> PCIRootUID=0/1

Sollten Probleme mit der Adressierung des RAM vorliegen, kann die konkrete Angabe des zu verwendenden Arbeitsspeichers hilfreich sein:

> maxmem=4096

Sollte es beim Installer zu Freezes kommen kann folgendes Flag helfen:

> npci=0x2000

Sollte der Installer immer noch nicht starten, kann eine Fehlersuche mit dem Bootflag *-v* weitergeführt werden.

#### 4.3 Festplattenformatierung und FusionDrive

Wenn der Installer erfolgreich gestartet ist, gibt es eigentlich kaum Unterschiede zur Installation mit originaler Apple Hardware. Bei der Formatierung ist allerdings zu beachten, dass eine Verschlüsselung der Festplatte nicht funktioniert, da einfach Hardwareseitig der notwendige Chip fehlt welcher sich um Verschlüsselung kümmert. Deshalb sollte das Volume auf dem Mac OSX installiert wird einfach als *Mac OS Extended (Journaled)* formatiert werden.

Was hingegen sehr gut funktioniert ist die Installation auf einem FusionDrive. Das kann mit wenigen Terminal-Befehlen mit einer beliebigen Kombination an Festplatten erstellt werden. Eine gute Anleitung dazu findet sich [hier](http://www.datenreise.de/macbook-pro-fusion-drive-selbst-erstellen-anleitung/#fusiondrive). Entsprechend einfach kann es auch wieder entfernt werden, siehe dazu [diese Anleitung](http://www.idomix.de/234-fusion-drive-trennen-deaktivieren-rueckgaengig-machen-separieren).

#### 4.4 Abschluss der Installation

Nach der erfolgreichen Mac OSX Installation und dem anfolgenden Neustart. Es ist wichtig das auch dieses mal vom USB-Stick gebotet wird. Auch beim zweiten Booten vom USB Stick sollte wieder die Option "Boot OS X Install from OS X Install OS X Yosemite" ausgewählt werden. Nach einem wieteren Neustart muss diesmal nicht der USB Stick sondern das Volume ausgewählt werden auf dem auch Mac OSX installiert wurde.

#### 4.5 iCloud Aktivierung

Prinzipiell funktioniert die iCloud. Beim Abschluss der Installation sollte aber zunächst von einer Registrierung abgesehen werden. Hintergrund ist folgender: Jedes Apple-Gerät hat eine eindeutige Seriennummer (bei MacBooks auf der Unterseite, bei iPhones bspw. auf der Rückseite). Diese ist auch notwendig um mit der iCloud zu kommunizieren. Der Hackintosh besitzt diese allerdings (noch) nicht. Beim Versuch mit iCloud Diensten zu kommunizieren kann es deshalb passieren, dass der Hackintosh geblockt wird.

### 5 Feinschliff

#### 5.1 Treiber und Anpassungen

Sollte Mac OSX ohne weiteres starten ist es fast geschafft. Für den Feinschliff wird muss zunächst die UEFI Partition der Installationsfestplatte mit FAT-32 formatiert werden. Dazu wird das Terminal geöffnet und zunächst folgender Befehl ausgeführt:

```
diskutil list
```

Jetzt muss die Partition ausgewählt werden, welche unter IDENTIFIER mit EFI gekennzeichnet ist. Diese muss dann mit folgendem Befehl bearbeitet werden:

```
sudo newfs_msdos -v EFI -F 32 /dev/[Name der Partition]
```

Jetzt sollte der Clover Installer vom USB-Stick gestartet werden. Das gleiche prozedere was vorher auf den USB Stick durchgeführt wurde, wird jetzt auch auf die Macintosh Festplatte angewendet. Jetzt allerdings mit folgender Konfiguration:

* Install Clover in the ESP
* Install RC-Scripts on target volume

Auch dieser Vorgang kann einige Minuten Inanspruch nehmen.
Sollte die selbe Hardware Konfiguration vorliegen wie in diesem Artikel beschrieben dann sind anfolgende Schritte durchzuführen. Andernfalls ist es notwendig die Konfiguration in mehreren Schritten selbst zu erstellen. Hierfür empfiehlt sich der Clover Konfigurator. Bei identischer Hardware konfiguration müssen noch folgende Änderungen an der UEFI Partition des Mac OSX Volumen durchgeführt werden:

// TODO: Dateien vorbereiten
* Navigiert zu /Volumes/EFI/EFI/CLOVER/ und kopiert diese [Konfiguration]
* Entpackt diese [Datei] und kopiert den Ordner 10.10 in /Volumes/EFI/EFI/CLOVER/kext/

Zuletzt fehlt in der vorliegenden Konfiguration nurnoch der Audiotreiber. Dieser kann leider nicht durch Clover injected werden, sondern muss über [dieses Script](https://github.com/toleda/audio_CloverALC) gepatcht werden. Dabei muss einfach den Installationsanleitungen bei dem Repo gefolgt und als Audio-Codec der Realtek 889 ausgewählt werden.

Nach der Installation sollte der Hackintosh neugestartet werden. Diesmal sollte als Bootmedium im Bios das Mac OSX Volume ausgewählt werden. Sollte das System ohne weitere Probleme starten, empfiehlt es sich folgende Dinge zu überprüfen:

* (Multi)Monitor-Setup
* Netzwerkkarte
* Audio IN/OUT
* USB-Anschlüsse

Wenn Probleme auftreten, wurden wahrscheinlich falsche Treiber ausgewählt oder sie fehlen gänzlich.

#### 5.2 iCloud und iMessage

Damit die Apple Dienste funktionieren muss dem Hackintosh erstmal eine Seriennummer verpasst werden. Diese wird normalerweise unter >/Extras/smbios.plist (SMserial) definiert.
Obwohl MultiBeast diese von Haus aus mit angelten sollte kann es vorkommen, dass die Seriennummer nicht gesetzt ist. Sollte dies der Fall sein, kann sie mit dem [Chameleon Wizard](http://www.tonymacx86.com/downloads.php?do=cat&id=10) generiert werden [7]. Die Seriennummer setzt sich aus den definierten Merkmalen des Macs (bspw. iMac, Mac Pro usw.) sowie aus dem Baujahr und weiteren Details zusammen. Im Chameleon Wizard können alle Details unter “SMBios” eingestellt werden.

Wenn die Seriennummer generiert ist, können die Apple Dienste aktiviert werden. Sollte alles funktionieren (insbesondere iMessage) dann ist es äußerst ratsam die >smbios.plist Datei zu speichern oder sich zumindest die Seriennummer zu notieren.

Sollten Probleme mit iMessage auftreten kann [dieser Artikel](http://www.tonymacx86.com/general-help/110471-how-fix-imessage.html) Abhilfe schaffen. Im schlimmsten Fall hilft nur noch der Griff zum Hörer um die Apple Support Hotline anzurufen und num eine manuelle Freischaltung des Rechners zu bitten. Hier gilt: die Support Mitarbeiter wissen anhand der Seriennummer sofort das es sich nicht um einen originalen Mac handelt. Es ist äußerst hilfreich, den Besitz eines originalen Macs anzusprechen.

#### 5.3 Bluethooth

Für die Verwendung der [Apple Tastatur (MC184D/B)](http://www.amazon.de/Apple-MC184D-Wireless-Keyboard-deutsches/dp/B005DQ0D8K) sowie des [Magic Trackpads](http://www.amazon.de/Apple-Bluetooth-Multitouch-Reichweite-Aluminium/dp/B003XLYAWC) ist ein USB-Bluethooth Dongle notwendig. Sehr gut funktioniert der [GMYLE NPL003340](http://www.amazon.de/gp/product/B007MKMJGO) welcher unter anderem auch Bluethooth 4.0 unterstützt. Einfach an einen freien Port einstecken und in den Mac OSX Settings sollte dann der Menüpunkt “Bluethooth” angezeigt werden. Leider funktioniert Continuity nicht, da der Bluethooth Stick nicht von Apple zertifiziert ist.

### 6 Updates und Backup

Wie Eingangs erwähnt ist es dringend notwendig eine gute Backupstrategie parat zu haben wenn der Hackintosh als Produktivrechner eingesetzt werden soll. Es empfehlen sich deshalb verschiedene Backupstrategien einzusetzen.

Für die Sicherung des eigentlichen Systems eignet sich ein 1zu1 Backup mit dem [Carbon Copy Cloner](https://www.bombich.com/). Hiermit lässt sich auf externen Festplatten eine exakte Kopie des Basissystems anlegen von der im Notfall direkt gebootet und das System zurück auf das eigentliche System gespiegelt werden kann. Hierfür muss nach der Erstellung des Backups der [Chimera Bootloader auf das Volume installiert werden](http://www.macbreaker.com/2012/06/backup-your-hackintosh-with-carbon-copy.html). Eine solche Kopie ist vor jedem Update von Mac OSX zu empfehlen um sicherzustellen das die Systemfunktionalität wiederhergestellt werden kann.

Zur Sicherung von Dateien kann wie auch bei originalen Macs die TimeMachine eingesetzt werden. Theoretisch ist auch eine Installation aus einem TimeMachine Backup möglich, praktisch verlangt das aber im Nachgang die erneute Konfiguration und Nachinstallation von Treibern.

### 7 Offene Punkte

Folgende Einschränkungen sind in der beschriebenen Konfiguration vorhanden:

* Nach dem Sleep-Mode ist der Audiotreiber nicht funktionsfähig
* Der Sleep-Mode führt zum Absturz des Systems nach dem Neustart
* Continuity ist nicht funktionsfähig

### Referenzen

[1] http://www.tonymacx86.com/yosemite-desktop-guides/144426-how-install-os-x-yosemite-using-clover.html  
[2] http://www.tonymacx86.com/user-builds/109540-success-squadsevens-build-i7-4770k-ga-z87x-ud3h-16gb-ram-gtx-780-3gb.html  
[4] http://www.macbreaker.com/2012/01/list-of-common-hackintosh-boot-flags_29.html
[5] http://www.datenreise.de/macbook-pro-fusion-drive-selbst-erstellen-anleitung/#fusiondrive  
[6] http://www.idomix.de/234-fusion-drive-trennen-deaktivieren-rueckgaengig-machen-separieren  
[7] http://www.tonymacx86.com/general-help/110471-how-fix-imessage.html  
[8] http://www.macbreaker.com/2012/06/backup-your-hackintosh-with-carbon-copy.html  
[9] (https://github.com/toleda/audio_CloverALC
