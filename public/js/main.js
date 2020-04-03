import {loadImage, loadBuster, loadLevel, loadBalls, loadHookManager, loadBackground} from './loaders.js';
import Settings from "./Settings.js";
import {setupKeyboard} from "./input.js";
import CollisionManager from "./collisions.js";

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


Settings.SCREEN_HEIGHT = canvas.height;
Settings.SCREEN_WIDTH = canvas.width;


Promise.all([loadImage('img/sprites.png'), loadImage('img/hookRope.png'),
    loadImage('img/backgrounds.png'), loadLevel('1')])
    .then(([sprites, hookImage, backgroundImage, levelSpec]) => {
        // background
        const drawBackground = loadBackground(backgroundImage);

        // cargar buster
        const buster = loadBuster(sprites, levelSpec.player);

        // cargar bolas
        const balls = loadBalls(levelSpec.balls);

        // cargar hooks
        const hooks = new Set();
        const hookManager = loadHookManager(hookImage, hooks);
        buster.setHookManager(hookManager);

        let deltaTime = 0;
        let lastTime = 0;

        function update(time) {
            deltaTime = time - lastTime;
            // dibujar background
            drawBackground(context);

            // pintar contorno
            context.strokeRect(0, 0, canvas.width, canvas.height);
            buster.draw(context);
            buster.update(deltaTime / 1000);
            balls.forEach(function (ball) {
                ball.draw(context);
                ball.update(deltaTime / 1000);
            });
            hooks.forEach(function (hook) {
                hook.draw(context);
                hook.update(deltaTime / 1000)
            });
            let check = new CollisionManager(balls, hooks);
            check.checkCollisions();


            lastTime = time;
            requestAnimationFrame(update);
        }

        const input = setupKeyboard(buster);
        input.listenTo(window);

        update(0);
    });


