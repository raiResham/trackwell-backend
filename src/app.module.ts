import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { KnexService } from './database/knex.service'

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
    exports: [],
})
export class AppModule {}
