const blogPost = require('./blogPost');
const Pets = require('./Pets');
const User = require('./User');
const comments = require('./comments');

// blogpost belongs to petOwner
blogPost.belongsTo(User, {
    foreignKey: 'User_Id',
    onDelete: 'CASCADE'
});
// A pet owner can have many blog posts
User.hasMany(blogPost, {
    foreignKey: 'User_Id',
    onDelete: 'CASCADE'
});

// A pet owner can have many pets
User.hasMany(Pets, {
    foreignKey: 'User_Id',
    onDelete: 'CASCADE'
});

// pets belong to pet owner
Pets.belongsTo(User, {
    foreignKey: 'User_Id',
    onDelete: 'CASCADE'
});

// a pet owner can have many blog posts
User.belongsToMany(blogPost, {
    through: {
        model: blogPost,
    foreignKey: 'User_Id',
    onDelete: 'CASCADE'
    }
});

User.belongsToMany(comments, {
    through: {
        model: comments,
        foreignKey: 'User_Id',
        onDelete: 'CASCADE'
    }
});

// A blog post can have many comments
blogPost.hasMany(comments, {
    foreignKey: 'blogPost_Id',
    onDelete: 'CASCADE'
});


module.exports = {
    blogPost,
    Pets,
    User,
    comments
};