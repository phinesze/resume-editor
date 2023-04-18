import {Controller, Get, Header, Param} from '@nestjs/common';
import {ResumesService} from "@/resumes/resumes.service";
import {ComponentsService} from "@/components/components.service";

@Controller('resumes')
export class ResumesController {
    constructor(
        private readonly previewService: ResumesService,
        private readonly componentsService: ComponentsService,
    ) {
    }

    @Get(':resumeId')
    async getPreviewHTML(@Param() {resumeId}): Promise<string> {
        const resumeData = {title: '職務経歴書', style: `p { font-size: 20px }`} // TODO resumeIdからAPIでデータを取得
        const components = await this.componentsService.getComponents(resumeId);
        return this.previewService.getPreviewHTML(resumeData, components);
    }

    @Get('style.css')
    @Header('content-type', 'text/css')
    async getPreviewCSS() {
        return this.previewService.getPreviewCSS();
    }
}
