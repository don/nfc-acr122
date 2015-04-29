This is an experimental project to use an external NFC reader from Android.

It uses the [ACR122U NFC reader](http://www.acs.com.hk/en/products/3/acr122u-usb-nfc-reader) from [ACS](http://www.acs.com.hk/). The NFC reader is connected to the Android with a USB On-the-Go (OTG) cable.

This is a very rough proof of concept written for a client. The NfcId Plugin code is embedded in the native project and will need to be extracted into a true Cordova plugin to be useful. The code in /plugins simply provides the manifest file. The NFC functions are provided by the ascsmc-1.1.1.jar.

This was written with Cordova-3.x, so it probably won't work with the latest code.

    $ cd platforms/android
    $ ant debug install

If you run the app without a reader attached, you'll get an ArrayIndexOutOfBoundsException exception.

[Video](https://plus.google.com/+DonColeman/posts/EwkZ8wund7g) of a Cordova app scanning an id from a NFC tag.
