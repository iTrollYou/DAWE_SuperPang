import {loadImage} from './loaders.js';
import SpriteSheet from "./SpriteSheet.js";


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

loadImage('img/sprites.png').then(image => {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('buster', 0, 0);
    sprites.draw('buster', context, 150, 150);
});
