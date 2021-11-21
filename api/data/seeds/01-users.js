exports.seed = async function (knex) {
    // await knex('users').truncate()
    await knex('users').insert([
        { firstName: 'Juan', lastName: 'Ordonez', password: 'password123', email: 'jordonez@gmail.com' },
        { firstName: 'Gabe', lastName: 'Chilson', password: 'jerseyMikes', email: 'Gabe@gmail.com' },
        { firstName: 'Amanda', lastName: 'Burtness', password: 'Burtness', email: 'Amanda@gmail.com' },
        { firstName: 'John', lastName: 'Marston', password: 'Marston', email: 'john@gmail.com' },
        { firstName: 'Spike', lastName: 'Spiegel', password: 'Spiegel', email: 'Spike@gmail.com' },
        { firstName: 'Geralt', lastName: 'ofRivia', password: 'ofRivia', email: 'witcher@gmail.com' }
    ])
}