exports.up = async function(knex) {
  await knex.schema.createTable('ideas', function(table) {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.text('content');
    table.text('category');
    table.timestamps();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('ideas');
};
