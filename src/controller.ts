class Controller {

    keyW: boolean;
    keyS: boolean;
    keyA: boolean;
    keyD: boolean;

    keyEnter: boolean;

    constructor() {
        this.keyW = false;
        this.keyS = false;
        this.keyA = false;
        this.keyD = false;

        this.keyEnter = false;
    }

    keyPress(type: string, code: string) {

        const isKeyDown = type === 'keydown' ? true : false;
        const isKeyUp   = type === 'keyup'   ? true : false;

        switch (code) {

            case 'KeyW': this.keyW = isKeyDown; break;
            case 'KeyS': this.keyS = isKeyDown; break;
            case 'KeyA': this.keyA = isKeyDown; break;
            case 'KeyD': this.keyD = isKeyDown; break;

            case 'Enter': this.keyEnter = isKeyDown; break;
        }
    }

    handleKeyPress(event: KeyboardEvent) {
        const { type, code } = event;
        this.keyPress(type, code);
    }

}

export default Controller;