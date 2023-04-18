import {Controller, Param, Get, Query} from '@nestjs/common';
import {ComponentsService} from "@/components/components.service";

@Controller('components')
export class ComponentsController {
    constructor(private readonly componentsService: ComponentsService) {
    }

    @Get()
    getComponents(@Query() query) {
        return this.componentsService.getComponents(query.user_id)
    }

    @Get(':id')
    getComponent(@Param() param) {
        return this.componentsService.getComponent(param.id)
    }

}
