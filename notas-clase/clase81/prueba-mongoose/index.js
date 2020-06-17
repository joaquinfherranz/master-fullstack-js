// https://code.tutsplus.com/es/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527

var mongoose = require('mongoose');
 
var Author = require('./author');
var Book = require('./book');
 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
     
    console.log('Successfully connected');
     
    var jamieAuthor = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Jamie',
            lastName: 'Munro'
        },
        biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
        twitter: 'https://twitter.com/endyourif',
        facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
    });
 
    jamieAuthor.save(function(err) {
        if (err) throw err;
         
        console.log('Author successfully saved.');
         
        var mvcBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
            author: jamieAuthor._id,
            ratings:[{
                summary: 'Great read'
            }]
        });
         
        mvcBook.save(function(err) {
            if (err) throw err;
         
            console.log('Book successfully saved.');
        });
         
        var knockoutBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
            author: jamieAuthor._id
        });
         
        knockoutBook.save(function(err) {
            if (err) throw err;
         
            console.log('Book successfully saved.');
        });
    });
});