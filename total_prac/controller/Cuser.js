const user = require('../models/User.js');

exports.signIn = function(request,response) {
    response.render('signin.ejs');
    // response.send('abcd')
}

exports.renderSignUp = function(request,response) {
    response.render('signup.ejs');
}

exports.signUp = function(request,response) {
    user.signUp(request.body, function(){});
}


// exports.main = function(request,response) {
//     response.render('main.ejs');
// }