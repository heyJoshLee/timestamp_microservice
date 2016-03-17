var express = require('express');
var router = express.Router();

var months = ["January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Timestamp' });
});

router.get('/:input', function(req, res, next) {
  var input = req.params["input"],
  output = {"unix": null,
            "natural": null}


  if(input.match(/^\d+$/)) {
    input = +input;
  }
  var d = new Date(input);

  if (Object.prototype.toString.call(d) === "[object Date]") {
    if ( isNaN(d.getTime())) { res.send(output); }

    output["unix"] = d.getTime();
    output["natural"] = days[d.getDay()] + " " + d.getDate() +  ", " + d.getFullYear();
  } 

  res.send(output);
});

module.exports = router;
