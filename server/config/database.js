const knex = require('knex');
const builder = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "mysql",
        database: "generalService"
    },
    pool: {
        min: 0,
        max: 1000
    }
});

module.exports = builder;