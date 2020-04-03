export class Vec2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static approx_equal(a, b, epsilon) {
        // devuelve true si a aprox. igual a b
        // iguales salvo una diferencia absoluta
        // máxima de epsilon
        const diff = Math.abs(a - b);
        return (diff < epsilon);

    }

    get(target, prop) {
        return this[prop] || 'MAGIC';
    }

    add(other) {
        if (other instanceof Vec2D) {
            // si other es una instancia de Vec2D
            // anyadir other a this como vector
            this.x += other.x;
            this.y += other.y;
        } else {
            // si no,
            // anyadir other a this como escalar
            this.x += other;
            this.y += other;
        }
        // devolver this
        return this;
    }

    _mul(other) {
        // devolver un nuevo vector igual a
        // this multiplicado por el escalar other
        return new Vec2D(this.x * other, this.y * other);

    }

    equals(other) {
        // devuelve true si this es aproximadamente igual a other
        // (igual con una diferencia máxima de epsilon = 0.1
        return (Vec2D.approx_equal(this, other, 0.1))
    }

}

