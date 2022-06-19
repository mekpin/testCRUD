const {Client} = require('pg')

const client = new Client({
    host: "topsy.db.elephantsql.com",
    user: "vfayqgbj",
    port: 5432,
    password: "41u7CEIqW4DJauN-1ONEkpWMA7paBcQv",
    database: "vfayqgbj"
})

module.exports = client