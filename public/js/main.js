import {loadImage, loadBuster} from './loaders.js';



const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

loadImage('img/sprites.png').then(image => {

    const buster = loadBuster(image);

    let deltaTime = 0;
    let lastTime = 0;

    function update(time) {
        deltaTime = time - lastTime;
        context.clearRect(0, 0, canvas.width, canvas.height);
        buster.draw(context);
        buster.update(deltaTime / 1000);
        lastTime = time;
        requestAnimationFrame(update);
    }

    update(0);

});
