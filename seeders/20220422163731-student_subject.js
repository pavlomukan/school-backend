module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.query(`
    insert into student_subject(id, subject_id , student_id, year_of_study) values
    (1, 1, 1, 1),
    (2, 2, 1, 1),
    (3, 1, 2, 1),
    (4, 2, 2, 1),
    (5, 1, 3, 1),
    (6, 2, 3, 1);
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.query(`
      delete from student_subject;
    `)
  }
};
