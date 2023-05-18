/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('stuntings', (table) => {
                table.increments('id').primary();
                table.integer('user_id',11).notNullable();
                table.string('username').notNullable();
                table.integer('umur',11).notNullable();
                table.float('tinggi_badan').notNullable();
                table.float('berat_badan').notNullable();
                table.enum('stunting',['Ya','Tidak']).notNullable();
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at').defaultTo(knex.fn.now());
        }
                );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.dropTable('stuntings');
};
