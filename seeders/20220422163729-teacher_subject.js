module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.query(`
    insert into teacher_subject(id, subject_id , teacher_id, teacher_experience) values
    (1, 1,1,13),
    (2, 2,2,41);
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.query(`
      delete from teacher_subject;
    `)
  }
};
