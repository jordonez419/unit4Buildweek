exports.seed = async function (knex) {
    await knex('usersPotlucks').truncate()
    await knex('usersPotlucks').insert([
        {
            userId: 1,
            role: 1,
            attendance: 1,
            potluckId: 1
        },
        {
            userId: 2,
            role: 1,
            attendance: 1,
            potluckId: 2
        },
        {
            userId: 3,
            role: 1,
            attendance: 1,
            potluckId: 3
        },
        {
            userId: 4,
            role: 1,
            attendance: 1,
            potluckId: 4
        },
        {
            userId: 5,
            role: 1,
            attendance: 1,
            potluckId: 1
        },
        {
            userId: 6,
            role: 1,
            attendance: 1,
            potluckId: 2
        },
    ])
}