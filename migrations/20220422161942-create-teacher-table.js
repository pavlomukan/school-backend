module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.query(`
      create table teacher(
        id int NOT NULL AUTO_INCREMENT,
          name varchar(255),
          surname varchar(255),
          teacher_position varchar(255),
          PRIMARY KEY (id)
      );
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.query(`
      drop table teacher;
    `)
  }
};
