import {Dialog} from "@/common/Dialog/Dialog";
import CDialog from "@/components/Dialog.vue";
import Component, {createDecorator} from "vue-class-component";
import {MapStateComponent} from '@/common/decorators';

@Component({components: {CDialog}})
@MapStateComponent({name: "bean"})
export default class PeopleDialog extends Dialog {
    onShow(): void {
        window.console.log("> Showing: ", this.state)
    }

    onHide(data: any): void {
        window.console.log("> Hidding")
    }
}

console.log(new PeopleDialog)
