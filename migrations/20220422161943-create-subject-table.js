module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.query(`
      create table subject(
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255),
        PRIMARY KEY (id)
         );
      `)
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.query(`
        drop table subject;
      `)
    }
  };
  