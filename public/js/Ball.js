import {Vec2D} from './math.js';
import {Object2D} from './Object2D.js';
import Settings from './Settings.js';

class Ball extends Object2D {

    constructor(radius, position, force) {
        super(new Vec2D(radius * 2, radius * 2), position);
        this.radius = radius;
        this.position = position;
        this.force = force;


        this.gravity = 0.4;
    }

    get pos() {
        return this.position;
    }

    get vel() {
        return this.force;
    }

    update(time_passed) {
        if (this.x < this.radius || this.x > Settings.SCREEN_WIDTH - this.radius) {
            this.force = new Vec2D(-this.force.x, this.force.y);
            if (this.x < this.radius)
                this.position = new Vec2D(2 * this.radius - this.x, this.y);
            else
                this.position = new Vec2D(2 * (Settings.SCREEN_WIDTH - this.radius) - this.x, this.y);
        }
        if (this.y + this.radius >= Settings.SCREEN_HEIGHT) {
            this.position = new Vec2D(this.x, 2 * (Settings.SCREEN_HEIGHT - this.radius) - this.y);
            this.force = new Vec2D(this.force.x, -this.force.y);
        } else if (this.y - this.radius <= 0) {
            this.position = new Vec2D(this.x, 2 * (this.radius) - this.y);
            this.force = new Vec2D(this.force.x, -this.force.y);
        }

        this.force.add(new Vec2D(0, this.gravity)); // <--- this is it
        this.position.add(this.force);
    }

    draw(ctx) {
        // Añade el métododrawa la clase Ball para que se pinte a sí misma en el contexto que se le pasa como parámetro
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();


    }
}

export {Ball};
