import SpriteSheet from "./SpriteSheet.js";
import Player from "./Player.js";
import {Vec2D} from "./Vec2D.js";
import {Ball} from "./Ball.js";
import {Hook, HookType} from "./Hook.js";


export function loadLevel(currentLevel) {
    return fetch(`levels/${currentLevel}.json`)
        .then(r => r.json());

}

export function loadImage(url) {

    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    })
}


export function loadBuster(image, playerSpec) {
    const spriteSheet = new SpriteSheet(image, 32, 32);
    spriteSheet.define('buster', 1, 0);
    spriteSheet.define('buster-1', 2, 0);
    spriteSheet.define('buster-2', 3, 0);
    // spriteSheet.define('buster-3', 4, 0);
    const pos = new Vec2D(playerSpec.pos[0], playerSpec.pos[1]);
    const size = new Vec2D(32, 32);

    return new Player(size, pos, spriteSheet);
}

export function loadBalls(ballSpec) {
    let balls = [];
    ballSpec.forEach(function (ball) {
        const pos = new Vec2D(ball.pos[0], ball.pos[1]);
        const force = new Vec2D(ball.force[0], ball.force[1]);
        balls.push(new Ball(ball.radius, pos, force))
    });
    return balls;


}

export function loadHookManager(hookImage, hooks) {
    return function hookManager(x, y) {
        // const spriteSheet = new SpriteSheet(hookImage, 16, 16);
        // spriteSheet.define('hook', 1, 0);
        const pos = new Vec2D(x, y);
        hooks.push(new Hook(0, pos, HookType.rope, hookImage));
    }
}