// define(function (require) {
//   var team1 = require("./team1");
//   var team2 = require("./team2");

define(["team1", "team2"], function (team1, team2){
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