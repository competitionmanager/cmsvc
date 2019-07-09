const Pool = require('pg').Pool
const pool = new Pool({
    user: 'dkim437',
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

const getTeam = (request, response) => {
    var id = request.params.id

    pool.query('SELECT * FROM team WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const createTeam = (request, response) => {
    console.log(request.body);

    var name = request.body.name;
    var bio = request.body.bio;

    pool.query(
        'INSERT INTO team (name, bio, created) VALUES ($1, $2, current_timestamp)',
        [name, bio], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json({"rc" : 0});
    })
}


module.exports = {
    getUser,
    getTeam,
    createTeam
}
