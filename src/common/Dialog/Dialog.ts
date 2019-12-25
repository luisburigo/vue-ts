import Vue from "vue";
import Component from "vue-class-component";

export interface IDialog {
    onHide(data: any): void

    onHide(data: any, sendData?: boolean): void

    onShow(): void

    hide(): void

    hide(sendData?: boolean): void

    show(): void
}

@Component
export class Dialog extends Vue implements IDialog {
    private _state: object = {};

    hide(sendData?: boolean): void {
        this.onHide(this.getState(), sendData)
    }

    show() {
        this.onShow();
    }

    setState(data: object) {
        this._state = data;
    }

    getState() {
        return {...this._state}
    }

    protected get state() {
        return this._state;
    }

    onHide(data: any, sendData?: boolean): void {
        // ~inicialmente foi criado uma classe abstrate
        // porem o "vue-class-component" tem uma limitação sobre isto
    }

    onShow(): void {
        // ~inicialmente foi criado uma classe abstrate
        // porem o "vue-class-component" tem uma limitação sobre isto
    }
}
