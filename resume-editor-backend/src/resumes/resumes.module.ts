import {Module} from '@nestjs/common';
import {ResumesController} from './resumes.controller';
import {ResumesService} from './resumes.service';
import {ComponentsService} from "@/components/components.service";
import {ComponentsModule} from "@/components/components.module";

@Module({
    imports: [ComponentsModule],
    controllers: [ResumesController],
    providers: [ResumesService]
})
export class ResumesModule {
}
