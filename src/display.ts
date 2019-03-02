import { Creature } from './types';

class Display {

    private buffer: CanvasRenderingContext2D;
    private context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.context = canvas.getContext('2d');
        this.buffer = document.createElement('canvas').getContext('2d');
    }

    draw(player: Creature, enemies: Array<Creature>) {
        this.drawBG('#c3c3c3');

        this.drawCreature(player);

        for (const enemy of enemies) {
            this.drawCreature(enemy);
        }
    }

    private drawBG(color: string) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
    }

    private drawCreature(creature: Creature) {
        this.buffer.fillStyle = creature.color;
        this.buffer.fillRect(creature.x, creature.y, creature.width, creature.height);
    }

    render() {
        this.context.drawImage(
            this.buffer.canvas, 0, 0,
            this.buffer.canvas.width,
            this.buffer.canvas.height, 0, 0,
            this.context.canvas.width,
            this.context.canvas.height
        );
    }

    resize(width?: number, height?: number) {

        width = width || document.documentElement.clientWidth - 32;
        height = height || document.documentElement.clientHeight - 32;

        this.context.canvas.width = width;
        this.context.canvas.height = height;

        this.buffer.canvas.width = width;
        this.buffer.canvas.height = height;

        this.context.imageSmoothingEnabled = false;

        this.render();
    }

}

export default Display;