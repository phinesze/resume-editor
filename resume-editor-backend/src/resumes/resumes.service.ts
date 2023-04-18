import {Injectable} from '@nestjs/common';
import {createSSRApp} from "vue";
import {renderToString} from "@vue/server-renderer";
import {Component} from "@vue/runtime-core";
import {DateLabel} from "@/vue-server-renderer/components/presets/atoms/DateLabel"
import {defineUserComponent} from "@/vue-server-renderer/components/defineUserComponent";
import {ComponentData, ComponentsService} from "@/components/components.service";

@Injectable()
export class ResumesService {
    constructor(
        private readonly componentsService: ComponentsService) {
    }

    async getPreviewHTML(resumeData: { title: string }, componentData: ComponentData[]): Promise<string> {
        const app = createSSRApp({
            data: () => resumeData,
            template: `
                <html>
                <head>
                    <link rel="stylesheet" href="./resumes/style.css" />
                </head>
                <body>
                    <div>
                <p>{{ title }}</p>
                <DateLabel value="2023-04-01" format="yyy年MM月"/>
                <UserComponent a="10" b="22" countStr="カウント"/>
                    </div>              
                </body>
                </html>`
        })

        // TODO プリセットなコンポーネントを追加
        app.component('DateLabel', DateLabel)

        // APIから取得したユーザー定義コンポーネントのデータを追加
        for (const {name, template, functions} of componentData) {
            app.component(name, defineUserComponent(template, functions))
        }

        const html = await renderToString(app)
        console.log(html)
        return html;
    }
    
    async getPreviewCSS() {
        return `p {font-size: 32px}`
    }
}
