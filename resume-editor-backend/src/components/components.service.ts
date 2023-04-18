import {Injectable, Param, Query} from '@nestjs/common';

export type ComponentData = {
    id: string,
    userId: string,
    name: string,
    template: string,
    functions: {
        [key in string]: [string[], string]
    }
}

const componentsMock: ComponentData[] = [{
    id: '1',
    userId: '1',
    name: 'UserComponent',
    template: `
        <div v-for="i in 3">
            {{countStr}}: {{i}}
        </div>
        <div>sumの結果: {{sum(2,4)}}</div>
        <div>sumAttrの結果: {{sumAttr()}}</div>
    `,
    functions: {
        sum: [['a', 'b'], 'return Number(a) + Number(b);'],
        sumAttr: [[], 'return Number($attrs.a) + Number($attrs.b);'],
    }
}
]

@Injectable()
export class ComponentsService {
    async getComponents(userId?: string): Promise<ComponentData[]> {
        return componentsMock
    }

    async getComponent(id: string): Promise<ComponentData> {
        return componentsMock.find(m => m.id === id)
    }
}
