/* global tagIdDiv */

var nfc = {
    addTagIdListener: function (success, failure) {
        cordova.exec(success, failure, "NfcIdPlugin", "listen", []);
    }
}

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        console.log("Device Ready");

        var success = function(result) {
            if (result) {
                //alert(result);
                //navigator.notification.alert(result, function() {}, "NFC Tag ID");
                tagIdDiv.innerHTML = result;
            }
        };

        var failure = function(reason) {
            alert ("Error " + JSON.stringify(reason))
        };

        console.log("Calling plugin");
        nfc.addTagIdListener(success, failure);
        console.log("Called plugin");

    }
};
