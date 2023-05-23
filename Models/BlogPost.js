const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model { }

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        pet_category: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        post_type: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
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
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'BlogPost',
    }
);

module.exports = BlogPost;
