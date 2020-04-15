define('scripts/template',['jquery'], function() {
  var showName = function(n) {
    var temp = "Hello "+n;
    $("body").append(temp);
  };
  return {
    showName: showName
  };
});
define('team1',{
  team: "Sunrisers Hyderabad",
  captain : " David Warner"
});
define('team2',{
  team: "RCB",
  captain : "Virat Kohli"
});
// define(function (require) {
//   var team1 = require("./team1");
//   var team2 = require("./team2");

define('scripts/main',["team1", "team2"], function (team1, team2){
  //alert("Welcome to Tutorialpoint");
  
  var rellenar = function(){
    // document.write("<h4>Hyderabad Team: </h4>" + "<br>" + " Team:"+team1.team +"<br>"+"Captain:" +team1.captain +"<br>");
  
    // document.write("<h4>Bangalore Team: </h4>" + "<br>" + " Team:"+team2.team +"<br>"+"Captain:"+team2.captain +"<br>");         
    document.body.innerHTML += "<h4>Hyderabad Team: </h4>" + "<br>" + " Team:"+team1.team +"<br>"+"Captain:" +team1.captain +"<br>";
  
    document.body.innerHTML += "<h4>Bangalore Team: </h4>" + "<br>" + " Team:"+team2.team +"<br>"+"Captain:"+team2.captain +"<br>";

  }

  return {
    fill: rellenar
  }
});
require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "team1": "scripts/team1",
    "team2": "scripts/team2"
  }
});

require(['scripts/template', 'scripts/main'], function(template, main) {
  template.showName("Jack");
  main.fill();
});
define("app", function(){});

