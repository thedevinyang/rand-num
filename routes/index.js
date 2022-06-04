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
<<<<<<< Updated upstream
=======
    res.render('index', {randomNumber:results});
>>>>>>> Stashed changes
  });
  
  res.render('index');
};

exports.viewAboutMe = function(req, res) {
  res.render('aboutMe');
};

exports.random = function(req, res) {
  res.render('random');

}