exports.seed = async function (knex) {
    await knex('users').truncate()
    await knex('users').insert([
        { username: 'Juan', password: 'password123', is_organizer: true, potluck_id: 1 },
        { username: 'Gabe', password: 'jerseyMikes', is_organizer: true, potluck_id: 2 },
        { username: 'Amanda', password: 'Burtness', is_organizer: true, potluck_id: 3 },
        { username: 'John', password: 'Marston', is_organizer: true, potluck_id: 4 },
        { username: 'Harry', password: 'Potter', is_organizer: false, potluck_id: 1 },
        { username: 'Spike', password: 'Spiegel', is_organizer: false, potluck_id: 2 },
        { username: 'Geralt', password: 'ofRivia', is_organizer: false, potluck_id: 3 },
        { username: 'Mace', password: 'Windu', is_organizer: false, potluck_id: 4 },
        { username: 'John', password: 'Doe', is_organizer: false, potluck_id: 1 },
        { username: 'Eren', password: 'Yeager', is_organizer: false, potluck_id: 2 },
        { username: 'Luka', password: 'Doncic', is_organizer: false, potluck_id: 3 },
        { username: 'Dan', password: 'Marino', is_organizer: false, potluck_id: 4 },
    ])
}