import {defineComponent, useAttrs} from 'vue'

export const defineUserComponent = (template: string, userFunctions: Record<string, [string[], string]>) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const functions: [string, Function][] = Object.entries(userFunctions).map(([name, [params, main]]) => {
        return [name, Function('$attrs', ...params, main)]
    })

    return defineComponent({
        setup() {
            const attrs = useAttrs();
            const nFunctions = Object.fromEntries(functions.map(([name, f]) => [name, (...params) => f(attrs, ...params)]))
            return {...attrs, ...nFunctions}
        },
        template
    });
};
