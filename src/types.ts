export interface IWorld {
    width:  number;
    height: number;
}

export interface IMoves {
    up:    boolean;
    down:  boolean;
    left:  boolean;
    right: boolean;
}

export interface IMovingShape {
    x?: number;
    y?: number;

    dx?:    number;
    dy?:    number;
    speed?: number;

    width?:  number;
    height?: number;
    color?:  string;
}

class MovingShape implements IMovingShape {
    x?: number;
    y?: number;

    dx?:    number;
    dy?:    number;
    speed?: number;

    width?:  number;
    height?: number;
    color?:  string;

    constructor(ms: IMovingShape = {}) {

        this.x = ms.x || 0;
        this.y = ms.y || 0;

        this.dx = this.dy = 0;
        this.speed = ms.speed || 5;

        this.width = ms.width || 16;
        this.height = ms.height || 16;
        this.color = ms.color || '#2185d0';

    }

    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
    }
}

export class Creature extends MovingShape {
    constructor(ms: IMovingShape) { super(ms); }
    attack() { console.log('Attack!'); }
}