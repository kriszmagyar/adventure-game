import Controller from './controller';
import Display from './display';
import Game from './game';
import Engine from './engine';
import './main.css';

(function() {

    const config = {
        world: {
            width: 576,
            height: 576
        },
        tile: {
            size: 16
        }
    };

    const start = function() {
        resize();
        engine.start();
    };

    const resize = function() {
        display.resize(config.world.width, config.world.height);
    };

    const render = function() {
        display.draw(tiles, player, enemies);
        display.render();
    };

    const update = function() {

        player.move({
            up:    controller.keys.KeyW.isDown,
            down:  controller.keys.KeyS.isDown,
            left:  controller.keys.KeyA.isDown,
            right: controller.keys.KeyD.isDown
        });

        if (controller.keys.Enter.isPressed) { player.attack(); }

        game.update();
        controller.update();
    };

    const controller =  new Controller([ 'KeyW', 'KeyS', 'KeyA', 'KeyD', 'Enter' ]);
    const display =     new Display(document.querySelector('canvas'));
    const game =        new Game(config.world);
    const engine =      new Engine(render, update);

    const tiles =   game.tiles;
    const player =  game.player;
    const enemies = game.enemies;

    window.addEventListener('keydown', controller.handleKeyPress.bind(controller));
    window.addEventListener('keyup',   controller.handleKeyPress.bind(controller));

    start();

})();