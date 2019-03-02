// new file

const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const conn = new Sequelize('userdb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
const gender = ["Male", "Female"];
const User = conn.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    gender: { type: Sequelize.STRING },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

conn.sync({ force: true }).then(() => {
    console.log("Tables created.")
    _.times(10, () => {
        firstName = faker.name.firstName()
        lastName = faker.name.lastName()
        return User.create({
            name: firstName + " " + lastName,
            email: firstName + "." + lastName + "@gmail.com",
            gender: gender[Math.floor(Math.random() * 2)]
        })
    })
});


module.exports = conn;
