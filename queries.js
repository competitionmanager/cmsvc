const Pool = require('pg').Pool
const pool = new Pool({
    user: 'peterlee',
    host: 'localhost',
    database: 'cmdb',
    port: 5432,
})

const getUser = (request, response) => {
    var id = request.params.id

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUser
}