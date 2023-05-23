const BlogPost = require('./BlogPost');
const Pets = require('./Pets');
const User = require('./User');
const comments = require('./comments');


// // A pet owner can have many pets
// User.hasMany(Pets, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// // pets belong to pet owner
// Pets.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// A pet owner can have many blog posts
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// blogpost belongs to petOwner
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// A blog post can have many comments
BlogPost.hasMany(comments, {
    foreignKey: 'blogPost_Id',
    onDelete: 'CASCADE'
});

// comment is connected to one blog post
comments.belongsTo(BlogPost, {
    foreignKey: 'blogPost_Id'
});

// a user can have many comments
User.hasMany(comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// a comment only has one user
comments.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    BlogPost,
    Pets,
    User,
    comments
};