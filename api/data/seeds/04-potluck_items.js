exports.seed = async function (knex) {
    await knex('potluck_items').truncate()
    await knex('potluck_items').insert([
        { potluck_id: 1, item_id: 1 },
        { potluck_id: 1, item_id: 2 },
        { potluck_id: 1, item_id: 3 },
        { potluck_id: 1, item_id: 4 },
        { potluck_id: 2, item_id: 5 },
        { potluck_id: 2, item_id: 6 },
        { potluck_id: 2, item_id: 7 },
        { potluck_id: 2, item_id: 8 },
        { potluck_id: 3, item_id: 9 },
        { potluck_id: 3, item_id: 10 },
        { potluck_id: 3, item_id: 11 },
        { potluck_id: 3, item_id: 12 },
        { potluck_id: 4, item_id: 13 },
        { potluck_id: 4, item_id: 14 },
        { potluck_id: 4, item_id: 15 },
        { potluck_id: 4, item_id: 16 },
    ])
}