var mongoose = require('mongoose');
 
var Author = require('./author');
var Book = require('./book');
 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
     
    console.log('Successfully connected');
     
    Book.find({
        title: /mvc/i
    }).sort('-created')
    .limit(5)
    .exec(function(err, books) {
        if (err) throw err;
         
        console.log(books);
    });
     
    Author.findById('5ee11841190b6657444a8024', function(err, author) {
        if (err) throw err;
         
        author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';
         
        author.save(function(err) {
            if (err) throw err;
             
            console.log('Author updated successfully');
        });
    });
     
    Author.findByIdAndUpdate('5ee11841190b6657444a8024', { linkedin: 'https://www.linkedin.com/in/jamie-munro-8064ba1a/' }, function(err, author) {
        if (err) throw err;
         
        console.log(author);
    });
});