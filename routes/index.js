/*
 * GET home page.
 */

const PythonShell = require('python-shell').PythonShell;


exports.view = function(req, res){
  PythonShell.run('pyscripts/my_script.py', null, function (err, results) {
    if (err) 
      throw err;
    // Results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    res.render('index', {randomNumber: 10, tryingthis:results});
  });
  
};

exports.viewAboutMe = function(req, res) {
  res.render('aboutMe');
};

exports.random = function(req, res) {
  res.render('random');

}