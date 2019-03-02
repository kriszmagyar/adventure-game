import { IWorld, IMovingShape, IMoves, Creature } from './types';

class Game {

    width: number;
    height: number;

    player: Player;
    enemies: Array<Enemy>;

    constructor(world: IWorld) {
        this.width = world.width;
        this.height = world.height;

        this.enemies = [];
        this.player = new Player();
        this.enemies.push(
            new Enemy({ x: 300, y: 300, color: 'red' })
        );
    }

    private collideObject(obj: IMovingShape) {
        if (obj.y <= 0) {
            obj.y = 0;
            obj.dy = 0;
        }
        if (obj.y + obj.height >= this.height) {
            obj.y = this.height - obj.height;
            obj.dy = 0;
        }
        if (obj.x <= 0) {
            obj.x = 0;
            obj.dx = 0;
        }
        if (obj.x + obj.width >= this.width) {
            obj.x = this.width - obj.width;
            obj.dx = 0;
        }
    }

    update() {

        this.player.update();
        this.collideObject(this.player);

    }
}


class Player extends Creature {

    constructor(ms?: IMovingShape) {
        super(ms);
    }

    move(moves: IMoves) {

        const { up, down, left, right } = moves;

        if (up)    { this.dy = -1; }
        if (down)  { this.dy = +1; }
        if (left)  { this.dx = -1; }
        if (right) { this.dx = +1; }

        if (!up && !down) {
            this.dy = 0;
        }

        if (!left && !right) {
            this.dx = 0;
        }

    }
}

class Enemy extends Creature {
    constructor(ms?: IMovingShape) {
        super(ms);
    }
}

export default Game;