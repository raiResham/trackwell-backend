import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users_prod', table => {
        table.increments('id').primary()
        table.string('email', 255).notNullable().unique()
        table.string('password_hash', 255).notNullable()
        table.string('first_name', 100)
        table.string('last_name', 100)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

        // Optional indexes
        table.index(['email'], 'idx_users_email')
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users_prod')
}
