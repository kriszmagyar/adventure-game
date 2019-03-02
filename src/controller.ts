class Controller {

    keys: {
        [keyId: string]: KeyInput;
    };

    constructor() {
        this.keys = {};
        this.add([ 'KeyW', 'KeyS', 'KeyA', 'KeyD', 'Enter' ]);
    }

    add(keyIds: string | Array<string>) {

        if (typeof keyIds === 'string') {
            this.keys[keyIds] = new KeyInput();
            return;
        }

        for (let id of keyIds) {
            this.keys[id] = new KeyInput();
        }
    }

    keyPress(type: string, code: string) {
        const isKeyDown = type === 'keydown' ? true : false;
        this.keys[code].down(isKeyDown);
    }

    handleKeyPress(event: KeyboardEvent) {
        const { type, code } = event;
        this.keyPress(type, code);
    }

    update() {
        for (const keyId in this.keys) {
            this.keys[keyId].isPressed = false;
        }
    }

}
class KeyInput {
    isDown:   boolean;
    isPressed: boolean;

    constructor() {
        this.isDown = this.isPressed = false;
    }

    down(isDown: boolean) {
        if (this.isDown !== isDown) {
            this.isPressed = isDown;
        }

        this.isDown = isDown;
    }
}

export default Controller;