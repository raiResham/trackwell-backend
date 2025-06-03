import { Injectable, OnModuleDestroy } from '@nestjs/common'
import knex, { Knex } from 'knex'
import config from '../../knexfile'

@Injectable()
export class KnexService implements OnModuleDestroy {
    private knexInstance: Knex

    constructor() {
        const environment = process.env.NODE_ENV || 'development'
        this.knexInstance = knex(config[environment])
    }

    get db() {
        return this.knexInstance
    }

    async onModuleDestroy() {
        await this.knexInstance.destroy()
    }
}
