exports.seed = async function (knex) {
    await knex('potluckRequirements').truncate()
    await knex('potluckRequirements').insert([
        {
            foodCategory: 'vegan',
            foodDescription: 'Beyond Turkey',
            servings: 5,
            fufilled: 1,
            potluckId: 1
        },
        {
            foodCategory: 'Meat Lovers',
            foodDescription: 'Ham off the bone',
            servings: 10,
            fufilled: 2,
            potluckId: 2
        },
        {
            foodCategory: 'Desserts',
            foodDescription: 'Chunky Monkey Ice Cream',
            servings: 10,
            fufilled: 3,
            potluckId: 3
        },
        {
            foodCategory: 'Alcohol',
            foodDescription: 'Whiskey',
            servings: 30,
            fufilled: 4,
            potluckId: 4
        },
        {
            foodCategory: 'Side Dish',
            foodDescription: 'Mashed Potatoes',
            servings: 5,
            fufilled: 5,
            potluckId: 1
        },
        {
            foodCategory: 'Alcohol',
            foodDescription: 'Egg Nogg',
            servings: 5,
            fufilled: 6,
            potluckId: 2
        },
    ])
}