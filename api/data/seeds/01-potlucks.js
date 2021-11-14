exports.seed = async function (knex) {
    // await knex('potlucks').truncate()
    await knex('potlucks').insert([
        { potluck_name: 'Thanksgiving', date: 'November 25th', time: '8:00pm', location: 'Plimoth' },
        { potluck_name: 'Xmas', date: 'December 25th', time: '12:00am', location: 'North Pole' },
        { potluck_name: 'Halloween', date: 'October 31st', time: '9:00pm', location: 'Spook City' },
        { potluck_name: 'St Patricks Day', date: 'March 17th', time: '1:00pm', location: 'Dublin' },
    ])
}