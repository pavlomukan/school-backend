module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.query(`
      create table student(
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255),
        surname varchar(255),
        group_name varchar(255),
        PRIMARY KEY (id)
    );
    
      `)
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.query(`
        drop table student;
      `)
    }
  };
  