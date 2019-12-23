import Vue from "vue";
import Component from "vue-class-component";

export interface IDialog {
    onHide(data: any): void

    onShow(): void

    hide(): void

    show(): void
}

@Component
export class Dialog extends Vue implements IDialog {
    private state: object = {};

    hide() {
        this.onHide(this.state);
    }

    show() {
        this.onShow();
    }

    setState(data: object) {
        this.state = data;
    }

    getState() {
        return {...this.state}
    }

    onHide(data: any): void {
        // ~inicialmente foi criado uma classe abstrate
        // porem o "vue-class-component" tem uma limitação sobre isto
    }

    onShow(): void {
        // ~inicialmente foi criado uma classe abstrate
        // porem o "vue-class-component" tem uma limitação sobre isto
    }
}