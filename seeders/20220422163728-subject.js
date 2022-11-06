module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.query(`
    insert into subject(id, name) values
    (1, "Math"),
    (2, "English"),
    (3, "Ukrainian"),
    (4, "French");
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.query(`
      delete from subject;
    `)
  }
};
