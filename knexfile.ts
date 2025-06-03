import { Knex } from 'knex'
import * as dotenv from 'dotenv'

dotenv.config()

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL, // DEV DB connection string
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
        pool: {
            afterCreate: (conn, done) => {
                // Ensure UTC timezone for development DB connection
                conn.query('SET TIMEZONE TO "UTC"', err => {
                    if (err) {
                        console.error('Error setting timezone for dev DB:', err)
                        return done(err) // Return error to stop connection
                    }
                    done() // Continue if no error
                })
            },
        },
    },
    qa: {
        client: 'pg',
        connection: process.env.QA_DATABASE_URL, // QA DB connection string
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
        pool: {
            afterCreate: (conn, done) => {
                // Ensure UTC timezone for QA DB connection
                conn.query('SET TIMEZONE TO "UTC"', err => {
                    if (err) {
                        console.error('Error setting timezone for qa DB:', err)
                        return done(err) // Return error to stop connection
                    }
                    done() // Continue if no error
                })
            },
        },
    },
    production: {
        client: 'pg',
        connection: process.env.PROD_DATABASE_URL, // Production DB connection
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
        pool: {
            afterCreate: (conn, done) => {
                // Ensure UTC timezone for prod DB connection
                conn.query('SET TIMEZONE TO "UTC"', err => {
                    if (err) {
                        console.error('Error setting timezone for production DB:', err)
                        return done(err) // Return error to stop connection
                    }
                    done() // Continue if no error
                })
            },
        },
    },
}

export default config
