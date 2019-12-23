import {Dialog, IDialog} from "@/common/Dialog";
import Component from "vue-class-component";

@Component
export default class PeopleDialog extends Dialog {
    saveData(data: any) {
        window.console.log(`> saving: `, data)
    }

    onHide(data: any): void {
        this.saveData(data);
    }

    onShow(): void {
        this.setState({
            name: 'Example',
            username: 'User'
        })
    }

}