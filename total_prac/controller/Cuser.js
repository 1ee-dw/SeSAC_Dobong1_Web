const user = require('../models/User.js');

exports.signIn = function(request,response) {
    response.render('signin.ejs');
    // response.send('abcd')
}

exports.signUp = function(request,response) {
    response.render('signup.ejs');
}

// exports.main = function(request,response) {
//     response.render('main.ejs');
// }