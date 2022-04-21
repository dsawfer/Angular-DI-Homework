import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {InMemoryDBService} from '@nestjs-addons/in-memory-db';
import {CardEntity} from "./card.entity";

@Controller()
export class AppController {
    constructor(private dbService: InMemoryDBService<any>) {
    }

    @Get()
    getAll(): CardEntity[] {
        return this.dbService.getAll();
    }

    @Post()
    create(@Body() dto: Partial<CardEntity>): CardEntity {
        return this.dbService.create(dto);
    }


    @Delete(':id')
    delete(@Param('id') id: string): void {
        return this.dbService.delete(id);
    }

    @Put()
    edit(@Body() product: CardEntity) {
        return this.dbService.update(product);
    }
}
