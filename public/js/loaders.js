import SpriteSheet from "./SpriteSheet.js";
import Player from "./Player.js";
import {Vec2D} from "./Vec2D.js";
import Settings from "./Settings.js";

export function loadImage(url) {

    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    })
}


export function loadBuster(image) {
    const spriteSheet = new SpriteSheet(image, 32, 32);
    spriteSheet.define('buster', 1, 0);
    spriteSheet.define('buster-1', 2, 0);
    spriteSheet.define('buster-2', 3, 0);
    spriteSheet.define('buster-3', 4, 0);
    const pos = new Vec2D(Settings.SCREEN_WIDTH / 2 - 16, Settings.SCREEN_HEIGHT - 32);
    const size = new Vec2D(32, 32);

    return new Player(size, pos, spriteSheet);
}