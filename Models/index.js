const BlogPost = require('./BlogPost');
const Pets = require('./Pets');
const User = require('./User');
const comments = require('./comments');

// blogpost belongs to petOwner
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// A pet owner can have many blog posts
User.hasMany(BlogPost, {
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
User.belongsToMany(BlogPost, {
    through: {
        model: BlogPost,
    foreignKey: 'user_id',
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
BlogPost.hasMany(comments, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE'
});


module.exports = {
    BlogPost,
    Pets,
    User,
    comments
};