import Controller from './controller';
import Display from './display';
import Game from './game';
import Engine from './engine';
import './main.css';

(function() {

    const config = {
        world: {
            width: 600,
            height: 600
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
        display.draw(player);
        display.render();
    };

    const update = function() {

        player.move({
            up:    controller.keyW,
            down:  controller.keyS,
            left:  controller.keyA,
            right: controller.keyD
        });

        if (controller.keyEnter) { player.attack(); }

        game.update();
    };

    const controller =  new Controller();
    const display =     new Display(document.querySelector('canvas'));
    const game =        new Game(config.world);
    const engine =      new Engine(render, update);

    const player = game.player;

    window.addEventListener('keydown', controller.handleKeyPress.bind(controller));
    window.addEventListener('keyup',   controller.handleKeyPress.bind(controller));

    start();

})();