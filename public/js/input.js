import Keyboard from "./Keyboard.js";
import Settings from "./Settings.js";
import {TIMETMP} from "./main.js";


export function setupKeyboard(buster) {
    const input = new Keyboard();

    input.addMapping('ArrowRight', keyState => {
        buster.direction.x = 1;
        buster.position.x += buster.direction.x * TIMETMP * Settings.PLAYER_SPEED;
    });
    input.addMapping('ArrowLeft', keyState => {
        buster.direction.x = -1;
        buster.position.x += buster.direction.x * TIMETMP * Settings.PLAYER_SPEED;
    });
    input.addMapping('ArrowUp', keyState => {
        //console.log(keyState);
    });
    input.addMapping('ArrowDown', keyState => {
        //console.log(keyState);
    });

    return input;
}
