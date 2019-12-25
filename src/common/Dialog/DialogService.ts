import {Dialog} from "@/common/Dialog/Dialog";
import Vue from "vue";

const noop = () => {
};

export class DialogService {

    static show(DialogConstructor: new () => Dialog, data?: object): Promise<object | boolean> {
        return new Promise<object | boolean>(resolve => {

            // Create container render component
            let app = document.createElement("div");
            document.body.appendChild(app);

            // Create instance component
            let vm: Dialog = new DialogConstructor();

            // Set data if exists
            if (data) {
                vm.setState(data);
            }

            // Render component in container and show
            vm.$mount(app);
            vm.show();

            // Get onHide method
            const onHide = vm.onHide || noop;
            vm.onHide = function (data: any, sendData?: boolean) {

                // Execute onHide from component
                onHide.call(this, data, sendData);

                // Destroy and remove element
                this.$destroy();
                this.$el.remove();

                // @ts-ignore
                vm = null;

                // Remove container
                app.remove();

                // @ts-ignore
                app = null;

                // resolve promise
                resolve(sendData && this.getState());
            }
        })
    }

}
