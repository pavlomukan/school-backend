module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.query(`
      create table student_subject(
        id int NOT NULL AUTO_INCREMENT,
          subject_id int not null,
          student_id int not null,
          year_of_study int,
          PRIMARY KEY (id),
          FOREIGN KEY (subject_id) REFERENCES subject(id),
          FOREIGN KEY (student_id) REFERENCES student (id)
      );
      
      `)
    },

    async down (queryInterface, Sequelize) {
      await queryInterface.query(`
        drop table student_subject;
      `)
    }
  };
