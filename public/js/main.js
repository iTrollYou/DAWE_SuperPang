import {loadImage, loadBuster} from './loaders.js';
import Settings from "./Settings.js";
import {setupKeyboard} from "./input.js";


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Settings.SCREEN_HEIGHT = canvas.height;
Settings.SCREEN_WIDTH = canvas.width;


loadImage('img/sprites.png').then(image => {

    const buster = loadBuster(image);

    let deltaTime = 0;
    let lastTime = 0;

    function update(time) {
        deltaTime = time - lastTime;
        context.clearRect(0, 0, canvas.width, canvas.height);
        // pintar contorno
        context.strokeRect(0, 0, canvas.width, canvas.height);
        buster.draw(context);
        buster.update(deltaTime / 1000);
        lastTime = time;
        requestAnimationFrame(update);
    }

    const input = setupKeyboard(buster);
    input.listenTo(window);

    update(0);

});
