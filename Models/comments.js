const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class comments extends Model {}

comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            blogPost_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'blogPost',
                    key: 'id',
                },
            },
            date_created: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'comments',
        }
    );

    module.exports = comments;