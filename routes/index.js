/*
 * GET home page.
 */

const PythonShell = require('python-shell').PythonShell;


exports.view = function(req, res){
  var data = {
    n : 6
  }

  var options = {
    args: [data["n"]]
  }
  PythonShell.run('pyscripts/my_script.py', options, function (err, pyscript_output) {
    if (err) 
      throw err;
    // Results is an array consisting of messages collected during execution
    console.log('results: %j', pyscript_output);
    data["randomNumber"] = pyscript_output
    res.render('index', data);
  });
  
};

exports.viewAboutMe = function(req, res) {
  res.render('aboutMe');
};

exports.random = function(req, res) {
  res.render('random');

}