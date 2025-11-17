const {DataTypes} = require("sequelize");

const sequelize = require("../config/database")


const Todo = sequelize.define("Todo",
    {
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    completed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
    },
    {
        tableName:"todos",
        timestamps:true,
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
);

module.exports = Todo