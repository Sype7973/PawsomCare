const blogPost = require('./blogPost');
const cats = require('./cats');
const dogs = require('./dogs');
const petOwner = require('./petOwner');
const comments = require('./comments');

// blogpost belongs to petOwner
blogPost.belongsTo(petOwner, {
    foreignKey: 'petOwner_Id',
    onDelete: 'CASCADE'
});
// A pet owner can have many blog posts
petOwner.hasMany(blogPost, {
    foreignKey: 'petOwner_Id',
    onDelete: 'CASCADE'
});

// A pet owner can have many cats
petOwner.hasMany(cats, {
    foreignKey: 'petOwner_Id',
    onDelete: 'CASCADE'
});

// A pet owner can have many dogs
petOwner.hasMany(dogs, {
    foreignKey: 'petOwner_Id',
    onDelete: 'CASCADE'
});

// A cat belongs to a pet owner
cats.belongsTo(petOwner, {
    foreignKey: 'petOwner_Id',
    onDelete: 'CASCADE'
});

// A dog belongs to a pet owner
dogs.belongsTo(petOwner, {
    foreignKey: 'petOwner_Id',
    onDelete: 'CASCADE'
});
// a pet owner can have many blog posts
petOwner.belongsToMany(blogPost, {
    through: {
        model: blogPost,
    foreignKey: 'petOwner_Id',
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
    cats,
    dogs,
    petOwner
};