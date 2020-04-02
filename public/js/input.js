import Keyboard from "./Keyboard.js";


export function setupKeyboard(buster) {
    const input = new Keyboard();

    input.addMapping('ArrowRight', keyState => {
        if (keyState) {
            buster.direction.x = 1;
        } else {
            buster.direction.x = 0;
        }


    });
    input.addMapping('ArrowLeft', keyState => {
        if (keyState) {
            buster.direction.x = -1;
        } else {
            buster.direction.x = 0;
        }
    });
    input.addMapping('ArrowUp', keyState => {
        //console.log(keyState);
    });
    input.addMapping('ArrowDown', keyState => {
        //console.log(keyState);
    });
    input.addMapping('Space', keyState => {
        if (keyState) {
            buster.shoot();
        }
    });

    return input;
}
