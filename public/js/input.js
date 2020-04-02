import Keyboard from "./Keyboard.js";
import Settings from "./Settings.js";

export function setupKeyboard(buster) {
    const input = new Keyboard();

    input.addMapping('ArrowRight', keyState => {
        buster.direction.x = 1;
        //console.log(keyState);
    });
    input.addMapping('ArrowLeft', keyState => {
        buster.direction.x = -1;
    });
    input.addMapping('ArrowUp', keyState => {
        //console.log(keyState);
    });
    input.addMapping('ArrowDown', keyState => {
        //console.log(keyState);
    });

    return input;
}
