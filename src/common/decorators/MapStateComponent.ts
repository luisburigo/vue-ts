import {createDecorator, VueDecorator} from 'vue-class-component';

interface IMapStateModel {
    name: string
}

export function MapStateComponent(...args: IMapStateModel[]): VueDecorator {
    const names = args.map(arg => arg.name);

    return createDecorator((options, key, index) => {
        options.beforeMount = function () {
            names.forEach(name => {
                // @ts-ignore
                if (typeof this['state'] != 'object' || !this.state.hasOwnProperty(name)) {
                    return console.warn(`> The property ${name} not has in state.`)
                }

                // @ts-ignore
                this[name] = this.state[name];
            });
        }
    })
}
