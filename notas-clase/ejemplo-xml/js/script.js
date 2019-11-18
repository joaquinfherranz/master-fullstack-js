function loadXML(url) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      var data = request.responseXML;
      console.log(data);
      var discos = data.getElementsByTagName("CD");
      
      for (var i = 0; i < discos.length; i++) {
          var disco  = discos[i];
          console.log("---------------------")
          console.log("Título:", directParser(disco, "TITLE"))
          console.log("Artista:", directParser(disco, "ARTIST"))
          console.log("Año:", directParser(disco, "YEAR"))
      }
    }
  };
  request.open("GET", url, true);
  request.send();
}

function directParser (item, property){
    return item.getElementsByTagName(property)[0].childNodes[0].nodeValue
}

loadXML("https://www.w3schools.com/xml/cd_catalog.xml");