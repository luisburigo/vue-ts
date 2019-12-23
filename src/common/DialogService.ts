import {Dialog} from "@/common/Dialog";
import Vue from "vue";

const noop = () => {
};

export class DialogService {

    static show(DialogConstructor: new () => Dialog): Promise<object> {
        return new Promise<object>(resolve => {

            // Create container render component
            let app = document.createElement("div");
            document.body.appendChild(app);

            // Create instance component
            let vm: Dialog = new DialogConstructor();

            // Render component in container and show
            vm.$mount(app);
            vm.show();

            // Get onHide method
            const onHide = vm.onHide || noop;
            vm.onHide = function (data: any) {

                // Execute onHide from component T
                onHide.call(this, data);

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
                resolve(this.getState());
            }
        })
    }

}