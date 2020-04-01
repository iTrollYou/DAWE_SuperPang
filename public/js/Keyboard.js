const PRESSED = 1;
const RELEASE = 0;
export default class KeyboardState {

    constructor() {
        // guarda el estado de clada tecla
        this.keyStates = new Map();

        // guarda el callback de cada tecla
        this.keyMap = new Map();
    }

    addMapping(keyCode, callback) {
        this.keyMap.set(keyCode, callback)
    }

    handleEvent(event) {
        const {code} = event;
        if (!this.keyMap.has(code)) {
            return;
        }
        event.preventDefault();

        const keyState = event.type === 'keydown' ? PRESSED : RELEASE;

        if (this.keyStates.get(code) === keyState) {
            return;
        }
        this.keyStates.set(code, keyState);
        this.keyMap.get(code)(keyState);
        console.log(this.keyStates);
    }

    lisenTo(window) {
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event);
            })
        })


    }
}