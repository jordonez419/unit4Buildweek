exports.up = async (knex) => {
  await knex.schema
    .createTable('potlucks', tbl => {
      tbl.string('potluck_name').notNullable()//.unique()
      tbl.increments('potluck_id')
      tbl.string('date').notNullable()
      tbl.string('time').notNullable()
      tbl.string('location').notNullable()
    })
    .createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.string('username', 200).notNullable()
      tbl.string('password', 200).notNullable()
      tbl.boolean('is_organizer').defaultTo(false)
      tbl.integer('potluck_id')
        .unsigned()
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onDelete('CASCADE')
    })
    .createTable('items', tbl => {
      tbl.increments('item_id')
      tbl.string('item_name').notNullable().unique()
    })
    .createTable('potluck_items', tbl => {
      tbl.integer('item_id')
        .unsigned()
        .notNullable()
        .references('item_id')
        .inTable('items')
        .onDelete('CASCADE')
      tbl.integer('potluck_id')
        .unsigned()
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onDelete('CASCADE')
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('potluck_items')
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('potlucks')
  await knex.schema.dropTableIfExists('items')
}
