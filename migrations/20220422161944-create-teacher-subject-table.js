module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.query(`
      create table teacher_subject(
        id int NOT NULL AUTO_INCREMENT,
        subject_id int not null,
        teacher_id int not null,
        teacher_experience float not null,
        PRIMARY KEY (id),
        FOREIGN KEY (subject_id) REFERENCES subject(id),
        FOREIGN KEY (teacher_id) REFERENCES teacher(id)
    );
      `)
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.query(`
        drop table teacher_subject;
      `)
    }
  };
  