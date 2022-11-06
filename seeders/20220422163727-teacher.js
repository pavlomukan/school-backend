module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.query(`
    insert into teacher (id, name, surname, teacher_position) values
    (1, "John", "Doe", "Principle"),
    (2, "Ivan", "Ivanov", "Teacher");
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.query(`
      delete from teacher;
    `)
  }
};
