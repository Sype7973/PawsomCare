const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pets extends Model { }

Pets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pet_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // image upload
        pet_image_url: {
            type: DataTypes.STRING
        },
        pet_size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_allergies: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pet_food: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pet_excercise: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pet_medication: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pet_grooming: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',

            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Pets',
    }
);

module.exports = Pets;