(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{186:function(e,n,t){"use strict";t.r(n);var i=t(1),r=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Mac im Eigenbau (Hackintosh) - Hardware Konfiguration und notwendige Software für Gigabyte Z87X-UD3H mit El Capitan.")]),e._v(" "),t("h3",{attrs:{id:"updates"}},[e._v("Updates")]),e._v(" "),t("h4",{attrs:{id:"_10-10-2015"}},[e._v("10.10.2015")]),e._v(" "),t("p",[e._v("Ein update auf El Capitan verlief ohne Probleme. Einzig der Audiotreiber für den Realtek 889 Chipsatz musste aktualisert werden.")]),e._v(" "),t("h4",{attrs:{id:"_10-04-2015"}},[e._v("10.04.2015")]),e._v(" "),t("p",[e._v("Seit Mac OS X Yosemite (10.10) ist eine problemfreie Installation mittels "),t("em",[e._v("Unibeast")]),e._v(" und "),t("em",[e._v("Multibeast")]),e._v(" nicht mehr möglich. Ein Umstieg auf die deutlich bessere Alternative Clover ist entsprechend sehr zu empfehlen, da dies zusätlich einige Probleme mit Multiboot sowie Reperaturinstallationen löst.")]),e._v(" "),t("h3",{attrs:{id:"_1-disclaimer"}},[e._v("1 Disclaimer")]),e._v(" "),t("p",[e._v("Ein Disclaimer vorweg: Für die Installation wird eine legale Kopie von Mac OS X 10.11 (El Capitan) und damit implizit ein erworbener Mac benötigt. Obwohl bei der Auswahl der Hardware auf maximal mögliche Kompatibilität geachtet wurde, müssen trotzdem einige Treiber nachinstalliert werden. Es ist daher Anfängern davon abzuraten die ersten Schritte direkt in Mac OSX mit einem Hackintosh zu machen.\nWeiterhin ist die Aktualisierbarkeit des Hackintoshs nicht unbedingt gewährleistet. Sollte also der Hackintosh als Produktivsystem verwendet werden ist eine gute Backupstrategie absolut notwendig.")]),e._v(" "),t("h3",{attrs:{id:"_2-auswahl-der-hardware"}},[e._v("2 Auswahl der Hardware")]),e._v(" "),t("p",[e._v("Bei der Auswahl der Hardware habe ich mich auf die Empfehlungen von "),t("a",{attrs:{href:"http://www.tonymacx86.com/section/295-customac.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tonymacx86.com"),t("OutboundLink")],1),e._v(" verlassen. Auf dieser Seite findet man alle notwendigen Informationen und Software für ein Hackintosh Projekt.")]),e._v(" "),t("layout-grid",[t("link-tile",{attrs:{background:"/hackintosh/product_i5_4690.jpg",link:"http://www.amazon.de/Intel-Core-i5-4690K-Processor-Cache/dp/B00KPRWB9G/"}},[e._v("Intel Core i5 4690K")]),e._v(" "),t("link-tile",{attrs:{background:"/hackintosh/product_z87x_ud3h.jpg",link:"http://www.amazon.de/Gigabyte-Z87X-UD3H-Mainboard-Sockel-Speicher/dp/B00CU4L508/"}},[e._v("Gigabyte Z87X-UD3H")]),e._v(" "),t("link-tile",{attrs:{background:"/hackintosh/product_msi_n_760.jpg",link:"http://www.amazon.de/MSI-V284-081R-N760-Grafikkarte-DisplayPort/dp/B00DIH8OW8/"}},[e._v("MSI Twin Frozr GTX 760")]),e._v(" "),t("link-tile",{attrs:{background:"/hackintosh/product_ballistix_sport.jpg",link:"http://www.amazon.de/dp/product/B007PNNTY4"}},[e._v("16Gb Crucial Ballistix Sport")]),e._v(" "),t("link-tile",{attrs:{background:"/hackintosh/product_samsung_evo_840.jpg",link:"http://www.amazon.de/dp/product/B00E391OX6/"}},[e._v("Samsung EVO 840 250GB")]),e._v(" "),t("link-tile",{attrs:{background:"/hackintosh/product_be_quiet.jpg",link:"http://www.amazon.de/quiet-Pure-Power-L8-CM-730W-Netzteil/dp/B005JRGVCK/"}},[e._v("Be quiet! L8-CM-730W")])],1),e._v(" "),t("h3",{attrs:{id:"_3-vorbereitung"}},[e._v("3 Vorbereitung")]),e._v(" "),t("h4",{attrs:{id:"_3-1-clover"}},[e._v("3.1 Clover")]),e._v(" "),t("p",[e._v("Clover ist ein UEFI Bootloader, der sich direkt in die UEFI Partition des Bootmediums installiert und für einen Hackintosh die notwendige Umgebung simmuliert. Die Hardwareseitige Untestützung von UEFI ermöglicht es Clover ein sehr unangenehmes Ziel für Apple zu sein, da auch Apple ein sehr identisches System auf dem nativen Macs verwendet. Nebenbei ermöglicht Clover bspw. Treiber auf der UEFI Partition zu speichern und während des Bootvorgangs zu injezieren, was die Updatebarkeit des Hackintoshs extrem verbessert. Clover kann auf "),t("a",{attrs:{href:"http://sourceforge.net/projects/cloverefiboot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sourceforge"),t("OutboundLink")],1),e._v(" heruntergeladen werden.")]),e._v(" "),t("h4",{attrs:{id:"_3-2-bios-update"}},[e._v("3.2 Bios Update")]),e._v(" "),t("p",[e._v("Bevor es losgehen kann, muss das Bios des Z87X-UD3H auf die Firmware F8m aktualisiert werden. Es ist wichtig, dass es exakt diese Version ist (nicht die F8 oder die F9 verwenden) da sich diese als äußerst stabil für Hackintosh Projekte herausgestellt hat. Die Firmware kann "),t("a",{attrs:{href:"http://www.mediafire.com/download/ph99v960sw0m9sd/Z87XUD3H.8m.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier heruntergeladen werden"),t("OutboundLink")],1),e._v('. Zur Installation muss die Datei entpackt und auf einen FAT32 formatierten USB-Stick gespielt werden. Das Update kann dann im Bios (F12 beim booten) über Q-Flash (unter Save & Exit) durchgeführt werden. Nach dem Update sollten die "optimized defaults" geladen werden.')]),e._v(" "),t("h4",{attrs:{id:"_3-3-bios-einstellungen"}},[e._v("3.3 Bios Einstellungen")]),e._v(" "),t("p",[e._v("Nach einem Neustart sollte das Bios dann wie folgt eingestellt werden [2]:")]),e._v(" "),t("p",[t("em",[e._v("Peripherals")])]),e._v(" "),t("ul",[t("li",[e._v("XHCI Mode, auf AUTO setzen")]),e._v(" "),t("li",[e._v("XHCI Hand-OFF, auf ENABLED setzen")]),e._v(" "),t("li",[e._v("EHCI Hand-OFF, auf ENABLED setzen")]),e._v(" "),t("li",[e._v("Internal Graphics deaktivieren")]),e._v(" "),t("li",[e._v("Init Display First, auf den PCIe slot setzen in der die GTX 760 steckt")])]),e._v(" "),t("p",[t("em",[e._v("Power Management")])]),e._v(" "),t("ul",[t("li",[e._v("Wake on Lan, deaktivieren")])]),e._v(" "),t("h4",{attrs:{id:"_3-3-hackintosh-installationsmedium-erstellen-1"}},[e._v("3.3 Hackintosh Installationsmedium erstellen [1]")]),e._v(" "),t("p",[e._v("Für die Installation von OSX wird, wie auch bei einem normalen Mac, natürlich ein Installationsmedium gebraucht. Dafür kann ein USB-Stick mit minimal 8GB Speicher verwendet werden.")]),e._v(" "),t("p",[e._v("Die Basis für den Hackintosh Installer ist ein ganz normaler Mac OSX Bootstick. Für die Erstellung existieren zahlreiche Tutorials im Netz ("),t("a",{attrs:{href:"http://www.macwelt.de/ratgeber/El-Capitan-Installer-9831539.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier bspw."),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v('Nachdem der Installationsstick erstellt wurde, ist es als nächstes notwendig ihn mit Clover zu patchen. Hierfür wird das heruntergeladene Clover gestartet sowie das richtige Installationsmedium (der gerade präparierte USB Stick) ausgewählt. Anschließend sollte in der "Custom Installation" das Bootmedium mit folgenden Einstellungen gepatcht werden:')]),e._v(" "),t("ul",[t("li",[t("em",[e._v("Bootloader")]),e._v("\n** Install boot0af in MBR")]),e._v(" "),t("li",[t("em",[e._v("CloverEFI")]),e._v("\n** CloverEFI 64-bits SATA")]),e._v(" "),t("li",[t("em",[e._v("Drivers64UEFI")]),e._v("\n** EmuVariableUefi-64\n** OsxAptioFixDrv-64\n** PartitionDxe-64")])]),e._v(" "),t("p",[e._v("Anschließend werden die Änderungen am Bootstick vorgenommen, was einige Minuten in Anspruch nehmen kann.")]),e._v(" "),t("p",[e._v("Nach der Anpassung des Installationssticks sind noch einige weitere Schritte notwendig. Hierbei geht es darum fehlende Treiber sowie eine Konfiguration zu der EFI Partition des USB Sticks hinzuzufügen:")]),e._v(" "),t("ul",[t("li",[e._v("Ersetzt in /EFI/CLOVER/ die standard config.plist mit dieser hier: "),t("a",{attrs:{href:"/static/hackintosh/config.plist"}},[e._v("default config.plist")])]),e._v(" "),t("li",[e._v("Sollte unter /EFI/CLOVER/kexts/ kein Ordner namens 10.11 existieren, erstellt ihn")]),e._v(" "),t("li",[e._v("Entpackt die folgende Datei und verschiebt die Dateien in den Ordner /EFI/CLOVER/kexts/10.11")])]),e._v(" "),t("h3",{attrs:{id:"_4-installation"}},[e._v("4 Installation")]),e._v(" "),t("h4",{attrs:{id:"_4-1-bootmedium-einstellen"}},[e._v("4.1 Bootmedium einstellen")]),e._v(" "),t("p",[e._v("Zunächst muss der USB-Stick als Bootmedium im Bios unter “Bios Features > Boot Options” ausgewählt werden. Der USB-Stick sollte mit "),t("em",[e._v("P")]),e._v(" anfangen. Es ist wichtig den Stick im UEFI Modus zu booten. Zuletzt müssen die Änderungen gespeichert werden.")]),e._v(" "),t("h4",{attrs:{id:"_4-2-mac-osx-installer-starten-4"}},[e._v("4.2 Mac OSX Installer starten [4]")]),e._v(" "),t("p",[e._v('Wenn alles eingestellt wurde, sollte im Anschluss der Clover Boot Screen erscheinen. Als Startmethode sollte bei einer Neuinstallation "Boot OS X Install from OS X Install OS X El Capitan" ausgewählt werden. Unter Umständen kann es Probleme beim ausführen des Installers geben, dann ist es eventuell notwendig weitere Parameter zum starten anzugeben:')]),e._v(" "),t("blockquote",[t("p",[e._v("-x")])]),e._v(" "),t("p",[e._v("Sollte der Bildschirm schwarz bleiben ist es wahrscheinlich, dass die Grafikkarte nicht ohne Weiteres unterstützt wird, dann können folgende Optionen nützlich sein:")]),e._v(" "),t("blockquote",[t("p",[e._v("GraphicsEnabler=Yes/No IGPEnabler=Yes/No\nPCIRootUID=0/1")])]),e._v(" "),t("p",[e._v("Sollten Probleme mit der Adressierung des RAM vorliegen, kann die konkrete Angabe des zu verwendenden Arbeitsspeichers hilfreich sein:")]),e._v(" "),t("blockquote",[t("p",[e._v("maxmem=4096")])]),e._v(" "),t("p",[e._v("Sollte es beim Installer zu Freezes kommen kann folgendes Flag helfen:")]),e._v(" "),t("blockquote",[t("p",[e._v("npci=0x2000")])]),e._v(" "),t("p",[e._v("Sollte der Installer immer noch nicht starten, kann eine Fehlersuche mit dem Bootflag "),t("em",[e._v("-v")]),e._v(" weitergeführt werden.")]),e._v(" "),t("h4",{attrs:{id:"_4-3-festplattenformatierung-und-fusiondrive"}},[e._v("4.3 Festplattenformatierung und FusionDrive")]),e._v(" "),t("p",[e._v("Wenn der Installer erfolgreich gestartet ist, gibt es eigentlich kaum Unterschiede zur Installation mit originaler Apple Hardware. Bei der Formatierung ist allerdings zu beachten, dass eine Verschlüsselung der Festplatte nicht funktioniert, da einfach Hardwareseitig der notwendige Chip fehlt welcher sich um Verschlüsselung kümmert. Deshalb sollte das Volume auf dem Mac OSX installiert wird einfach als "),t("em",[e._v("Mac OS Extended (Journaled)")]),e._v(" formatiert werden.")]),e._v(" "),t("p",[e._v("Was hingegen sehr gut funktioniert ist die Installation auf einem FusionDrive. Das kann mit wenigen Terminal-Befehlen mit einer beliebigen Kombination an Festplatten erstellt werden. Eine gute Anleitung dazu findet sich "),t("a",{attrs:{href:"http://www.datenreise.de/macbook-pro-fusion-drive-selbst-erstellen-anleitung/#fusiondrive",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),t("OutboundLink")],1),e._v(". Entsprechend einfach kann es auch wieder entfernt werden, siehe dazu "),t("a",{attrs:{href:"http://www.idomix.de/234-fusion-drive-trennen-deaktivieren-rueckgaengig-machen-separieren",target:"_blank",rel:"noopener noreferrer"}},[e._v("diese Anleitung"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"_4-4-abschluss-der-installation"}},[e._v("4.4 Abschluss der Installation")]),e._v(" "),t("p",[e._v('Nach der erfolgreichen Mac OSX Installation und dem anfolgenden Neustart ist es wichtig das auch dieses mal vom USB-Stick gebotet wird. Auch beim zweiten Booten vom USB Stick sollte wieder die Option "Boot OS X Install from OS X Install OS X El Capitan" ausgewählt werden. Nach einem weiteren Neustart muss diesmal nicht der USB Stick sondern das Volume ausgewählt werden auf dem auch Mac OSX installiert wurde.')]),e._v(" "),t("h4",{attrs:{id:"_4-5-icloud-aktivierung"}},[e._v("4.5 iCloud Aktivierung")]),e._v(" "),t("p",[e._v("Prinzipiell funktioniert die iCloud. Beim Abschluss der Installation sollte aber zunächst von einer Registrierung abgesehen werden. Hintergrund ist folgender: Jedes Apple-Gerät besitzt neben einer eindeutigen Seriennummer (bei MacBooks auf der Unterseite, bei iPhones bspw. auf der Rückseite) auch eine eindeutige Identifizierung, die sich aus den verwendeten Hardwareteilen zusammensetzt. Diese Identifizierung ist auch notwendig um mit der iCloud zu kommunizieren und muss auch bei Hackintoshs eindeutig sein. Der Hackintosh besitzt diese allerdings (noch) nicht. Beim Versuch mit iCloud Diensten zu kommunizieren kann es deshalb passieren, dass der Hackintosh geblockt wird.")]),e._v(" "),t("h3",{attrs:{id:"_5-feinschliff"}},[e._v("5 Feinschliff")]),e._v(" "),t("h4",{attrs:{id:"_5-1-treiber-und-anpassungen"}},[e._v("5.1 Treiber und Anpassungen")]),e._v(" "),t("p",[e._v("Sollte Mac OSX ohne weiteres starten ist es fast geschafft. Für den Feinschliff wird muss zunächst die UEFI Partition der Installationsfestplatte mit FAT-32 formatiert werden. Dazu wird das Terminal geöffnet und zunächst folgender Befehl ausgeführt:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("diskutil list\n")])])]),t("p",[e._v("Jetzt muss die Partition ausgewählt werden, welche unter IDENTIFIER mit EFI gekennzeichnet ist. Diese muss dann mit folgendem Befehl bearbeitet werden:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo newfs_msdos -v EFI -F 32 /dev/[Name der Partition]\n")])])]),t("p",[e._v("Jetzt sollte der Clover Installer vom USB-Stick gestartet werden. Das gleiche prozedere was vorher auf den USB Stick durchgeführt wurde, wird jetzt auch auf die Macintosh Festplatte angewendet. Jetzt allerdings mit folgender Konfiguration:")]),e._v(" "),t("ul",[t("li",[e._v("Install Clover in the ESP")]),e._v(" "),t("li",[e._v("Install RC-Scripts on target volume")])]),e._v(" "),t("p",[e._v("Auch dieser Vorgang kann einige Minuten Inanspruch nehmen.\nSollte die selbe Hardware Konfiguration vorliegen wie in diesem Artikel beschrieben dann sind anfolgende Schritte durchzuführen. Andernfalls ist es notwendig die Konfiguration in mehreren Schritten selbst zu erstellen. Hierfür empfiehlt sich der Clover Konfigurator. Bei identischer Hardware konfiguration müssen noch folgende Änderungen an der UEFI Partition des Mac OSX Volumen durchgeführt werden:")]),e._v(" "),t("ul",[t("li",[e._v("Navigiert zu /Volumes/EFI/EFI/CLOVER/ und kopiert die Konfigurationsdatei "),t("a",{attrs:{href:"/static/hackintosh/config.plist"}},[e._v("Konfiguration")])]),e._v(" "),t("li",[e._v("Entpackt diese [Datei] und kopiert den Ordner 10.11 in /Volumes/EFI/EFI/CLOVER/kext/")])]),e._v(" "),t("p",[e._v("Zuletzt fehlt in der vorliegenden Konfiguration nurnoch der Audiotreiber. Dieser kann leider nicht durch Clover injected werden, sondern muss über "),t("a",{attrs:{href:"https://github.com/toleda/audio_CloverALC",target:"_blank",rel:"noopener noreferrer"}},[e._v("dieses Script"),t("OutboundLink")],1),e._v(" gepatcht werden. Dabei muss einfach den Installationsanleitungen bei dem Repo gefolgt und als Audio-Codec der Realtek 889 ausgewählt werden.")]),e._v(" "),t("p",[e._v("Nach der Installation sollte der Hackintosh neugestartet werden. Diesmal sollte als Bootmedium im Bios das Mac OSX Volume ausgewählt werden. Sollte das System ohne weitere Probleme starten, empfiehlt es sich folgende Dinge zu überprüfen:")]),e._v(" "),t("ul",[t("li",[e._v("(Multi)Monitor-Setup")]),e._v(" "),t("li",[e._v("Netzwerkkarte")]),e._v(" "),t("li",[e._v("Audio IN/OUT")]),e._v(" "),t("li",[e._v("USB-Anschlüsse")])]),e._v(" "),t("p",[e._v("Wenn Probleme auftreten, wurden wahrscheinlich falsche Treiber ausgewählt oder sie fehlen gänzlich.")]),e._v(" "),t("h4",{attrs:{id:"_5-2-icloud-und-imessage-9"}},[e._v("5.2 iCloud und iMessage [9]")]),e._v(" "),t("p",[e._v("Damit die Apple Dienste funktionieren muss dem Hackintosh erstmal die notwendigen Identifizierungsmerkmale eingepflanzt werden. Dazu gehören MLB, SerialNumber sowie SmUUID. Hierfür eignet sich der wirklich empfehlenswerte "),t("a",{attrs:{href:"http://mackie100projects.altervista.org/clover-configurator",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLOVER Configurator"),t("OutboundLink")],1),e._v(". Insbesondere eine Einzigartige  Seriennummer ist wichtig, andernfalls wird die Authentifizierung nicht erfolgreich sein. Zur Sicherstellung kann ein "),t("a",{attrs:{href:"https://selfsolve.apple.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple eigener Dienst"),t("OutboundLink")],1),e._v(" verwendet werden, generiert solange Seriennummern bis der Dienst kein Ergebnis mehr liefert.")]),e._v(" "),t("p",[e._v("Wenn die Seriennummer generiert ist, können die Apple Dienste aktiviert werden. Sollte alles funktionieren (insbesondere iMessage) dann ist es äußerst ratsam die config.plist Datei zu speichern oder sich zumindest die Seriennummer zu notieren. Andernfalls müssen alle anderen Indetifizierungsmerkmale ebenfalls neu erzeugt werden.")]),e._v(" "),t("p",[e._v("Sollten Probleme mit iMessage auftreten kann "),t("a",{attrs:{href:"http://www.tonymacx86.com/general-help/110471-how-fix-imessage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("dieser Artikel"),t("OutboundLink")],1),e._v(" Abhilfe schaffen. Im schlimmsten Fall hilft nur noch der Griff zum Hörer um die Apple Support Hotline anzurufen und num eine manuelle Freischaltung des Rechners zu bitten. Hier gilt: die Support Mitarbeiter wissen anhand der Seriennummer sofort das es sich nicht um einen originalen Mac handelt. Es ist äußerst hilfreich, den Besitz eines originalen Macs anzusprechen.")]),e._v(" "),t("h4",{attrs:{id:"_5-3-bluethooth"}},[e._v("5.3 Bluethooth")]),e._v(" "),t("p",[e._v("Für die Verwendung der "),t("a",{attrs:{href:"http://www.amazon.de/Apple-MC184D-Wireless-Keyboard-deutsches/dp/B005DQ0D8K",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Tastatur (MC184D/B)"),t("OutboundLink")],1),e._v(" sowie des "),t("a",{attrs:{href:"http://www.amazon.de/Apple-Bluetooth-Multitouch-Reichweite-Aluminium/dp/B003XLYAWC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Magic Trackpads"),t("OutboundLink")],1),e._v(" ist ein USB-Bluethooth Dongle notwendig. Sehr gut funktioniert der "),t("a",{attrs:{href:"http://www.amazon.de/gp/product/B007MKMJGO",target:"_blank",rel:"noopener noreferrer"}},[e._v("GMYLE NPL003340"),t("OutboundLink")],1),e._v(" welcher unter anderem auch Bluethooth 4.0 unterstützt. Einfach an einen freien Port einstecken und in den Mac OSX Settings sollte dann der Menüpunkt “Bluethooth” angezeigt werden. Leider funktioniert Continuity nicht, da eine WLAN Karte fehlt.")]),e._v(" "),t("h3",{attrs:{id:"_6-updates-und-backup"}},[e._v("6 Updates und Backup")]),e._v(" "),t("p",[e._v("Wie Eingangs erwähnt ist es dringend notwendig eine gute Backupstrategie parat zu haben, insbesondere wenn der Hackintosh als Produktivrechner eingesetzt werden soll. Es empfehlen sich deshalb verschiedene Backupstrategien einzusetzen.")]),e._v(" "),t("p",[e._v("Für die Sicherung des eigentlichen Systems eignet sich ein 1zu1 Backup mit dem "),t("a",{attrs:{href:"https://www.bombich.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Carbon Copy Cloner"),t("OutboundLink")],1),e._v(". Hiermit lässt sich auf externen Festplatten eine exakte Kopie des Basissystems anlegen von der im Notfall direkt gebootet und das System zurück auf das eigentliche System gespiegelt werden kann. Hierfür muss nach der Erstellung des Backups der "),t("a",{attrs:{href:"http://www.macbreaker.com/2012/06/backup-your-hackintosh-with-carbon-copy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chimera Bootloader auf das Volume installiert werden"),t("OutboundLink")],1),e._v(". Eine solche Kopie ist vor jedem Update von Mac OSX zu empfehlen um sicherzustellen das die Systemfunktionalität wiederhergestellt werden kann.")]),e._v(" "),t("p",[e._v("Zur Sicherung von Dateien kann wie auch bei originalen Macs die TimeMachine eingesetzt werden. Theoretisch ist auch eine Installation aus einem TimeMachine Backup möglich, praktisch verlangt das aber im Nachgang die Nachinstallation des Audio Treibers.")]),e._v(" "),t("h3",{attrs:{id:"_7-offene-punkte"}},[e._v("7 Offene Punkte")]),e._v(" "),t("p",[e._v("Folgende Einschränkungen sind in der beschriebenen Konfiguration vorhanden:")]),e._v(" "),t("ul",[t("li",[e._v("Nach dem Sleep-Mode ist der Audiotreiber nicht funktionsfähig")]),e._v(" "),t("li",[e._v("Der Sleep-Mode führt zum Absturz des Systems nach dem Neustart")]),e._v(" "),t("li",[e._v("Nach Systemupdates muss der Audiotreiber wieder neu installiert werden")]),e._v(" "),t("li",[e._v("Continuity ist nicht funktionsfähig da keine WLAN Karte enthalten")])]),e._v(" "),t("h3",{attrs:{id:"referenzen"}},[e._v("Referenzen")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"http://www.tonymacx86.com/yosemite-desktop-guides/144426-how-install-os-x-yosemite-using-clover.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install OSX Yosemite Using Clover"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.tonymacx86.com/user-builds/109540-success-squadsevens-build-i7-4770k-ga-z87x-ud3h-16gb-ram-gtx-780-3gb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Success Squadsevens Build i7-4770k ga-z87x-ud3h"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.macbreaker.com/2012/01/list-of-common-hackintosh-boot-flags_29.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Common Hackintosh Boot"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.datenreise.de/macbook-pro-fusion-drive-selbst-erstellen-anleitung/#fusiondrive",target:"_blank",rel:"noopener noreferrer"}},[e._v("Macbook Pro Fusion Drive"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.idomix.de/234-fusion-drive-trennen-deaktivieren-rueckgaengig-machen-separieren",target:"_blank",rel:"noopener noreferrer"}},[e._v("Macbook Fusion Drive separieren"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.tonymacx86.com/general-help/110471-how-fix-imessage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to fix iMessage"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.macbreaker.com/2012/06/backup-your-hackintosh-with-carbon-copy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Backup Hackintosh with Carbon Copy"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/toleda/audio_CloverALC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clover ALC"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.tonymacx86.com/general-help/110471-how-fix-imessage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to fix iMessage"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://mackie100projects.altervista.org/clover-configurator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clover Configuration"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://selfsolve.apple.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("selfsolve.apple.com"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);n.default=r.exports}}]);