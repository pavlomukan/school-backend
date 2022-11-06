module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.query(`
    insert into student (id, name, surname, group_name) values
    (1, "John", "Smith", "PI-10"),
    (2, "Ivan", "Petrenko", "PI-10"),
    (3, "Svitlana", "Anderson", "PI-10");
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.query(`
      delete from student;
    `)
  }
};
