exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.text("projectDescription", 500);
      tbl.boolean("completed", false).notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.text("resourceDescription", 500);
    })
    .createTable("project_resource", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["project_id", "resource_id"]);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("taskDescription", 500).notNullable();
      tbl.text("note", 500);
      tbl.boolean("completed", false).notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("project_resource")
    .dropTableIfExists("tasks");
};
