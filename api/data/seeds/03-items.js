exports.seed = async function (knex) {
    // await knex('items').truncate()
    await knex('items').insert([
        { item_name: 'Mashed Potatoes' },
        { item_name: 'Pumpkin Pie' },
        { item_name: 'Turkey' },
        { item_name: 'Gravy' },
        { item_name: 'Egg Nog' },
        { item_name: 'Ginger Bread Cookies' },
        { item_name: 'Mac and Cheese' },
        { item_name: 'Ham' },
        { item_name: 'Candy' },
        { item_name: 'Chocolate' },
        { item_name: 'Fake blood' },
        { item_name: 'Zombie cake' },
        { item_name: 'Beer' },
        { item_name: 'Tequila' },
        { item_name: 'Rum' },
        { item_name: 'Whiskey' },
    ])
}
