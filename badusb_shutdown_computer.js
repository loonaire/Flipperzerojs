let badusb = require("badusb");
let layout = "fr-FR";


// init

// configure the keyboard to connect
badusb.setup({ vid: 0x046d, pid: 0xc33f, mfr_name: "Logitech, Inc", prod_name: "Keyboard", layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl" });
print("Use " + layout + " Keyboard layout");
print("Waiting for connection to computer");
while (!badusb.isConnected()) {
    delay(500);
}

// process
// send keys to computer
print("Send Alt F4 to computer");
delay(500);
badusb.press("ALT","F4");
print("Validate shutdown");
delay(500);
badusb.press("ENTER");


// end of script
delay(100);
badusb.quit();
print("Commands sent to computer");