const keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {

    },

    _createKeys() {

    },

    _triggerEvent(handlerName) {
        console.log("Event Triggered! Event Name: " + handlerName);
    },

    _toggleCapsLock() {
        console.log("Caps Lock Toggled!");
    }
};