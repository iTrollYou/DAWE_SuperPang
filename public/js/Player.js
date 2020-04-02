import {Object2D, Vec2D} from "./math.js";
import Settings from "./Settings.js";

export default class Player extends Object2D {

    constructor(size, pos, sprite) {
        super(size, pos);
        this.force = new Vec2D(0, 0);
        this.sprite = sprite;
        this.direction = new Vec2D(1, 0);
    }

    // time respresenta el tiempo que ha pasado desde la última ejecución
    update(time) {

        /*
        Asume por el momento que Settings.SCREEN_HEIGHT y Settings.SCREEN_WIDTH indican el tamaño de
        la pantalla del juego. Settings tiene otras constantes definidas (échales un vistazo)
        El objeto player tiene una altura (height) y una anchura (width)
         */
        const player = document.createElement('canvas');
        player.width = Settings.SCREEN_WIDTH;
        player.height = Settings.SCREEN_HEIGHT;

        // si buster está cayendo (está por debajo de la altura de la pantalla)
        // fuerza = añadir fuerza vertical de gravedad * tiempo
        if (this.position.y < Settings.SCREEN_HEIGHT)
            this.force.y += Settings.GRAVITY * time;

        // position = añadir fuerza * tiempo al eje y
        this.position.y += this.force.y * time;

        // position = añadir dirección * tiempo * velocidad del jugador al eje x
        this.position.x += this.direction.x * time * Settings.PLAYER_SPEED;

        // si buster se sale por la izquierda de la pantalla
        // position = 0,y
        if (this.position.x < 0)
            this.position.x = 0;
        // sino, si buster se sale por la derecha
        // position =  lo más a la derecha sin salirse , y
        if (this.position.x > player.width - this.size.x ) //????????
            this.position.x = player.width - this.size.x ;

        // si buster se sale por la parte inferior de la pantalla
        // position = x, lo más abajo sin salirse
        if (this.position.y >= player.height - this.size.y)
            this.position.y = player.height - this.size.y;
    }

    draw(context) {
        context.drawImage(this.sprite.get('buster'), this.position.x, this.position.y);

    }
}