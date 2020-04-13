"use strict";

function $http(url) {
  var core = function core(method, url, args) {
    return new Promise(function (resolve, reject) {
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.onreadystatechange = function () {
        // try {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          if (xmlHttp.response == '404') {
            reject('Error 404');
          } else {
            resolve(JSON.parse(xmlHttp.responseText));
          }
        } else if (xmlHttp.readyState === 4) {
          reject('Error ' + xmlHttp.status); // console.error("ERROR! 404");
          //   console.info(JSON.parse(xmlHttp.responseText));
        } // }
        // catch (e) {
        //   reject(e);
        // }

      };

      xmlHttp.open(method, url, true); // asincrona

      xmlHttp.send();

      xmlHttp.onerror = function () {
        reject(this.statusText);
      };
    }); // .catch(error=>reject('Error en send'))
  };

  return {
    get: function get() {
      return core('GET', url);
    }
  };
} // var prueba = $http('http://airemad.com/api/v1/station').get();
// console.log('prueba=', prueba);


$http("http://airemad.com/api/v1/station").get().then(function (data) {
  var content = "";
  data.forEach(function (element) {
    content += "<li>La estaci\xF3n ".concat(element.nombre_estacion, " (").concat(element.id, ") est\xE1 en ").concat(element.direccion, "</li>");
  });
  document.body.innerHTML = "<ul>".concat(content, "</ul>");
})["catch"](function (err) {
  return console.log(err);
});
//# sourceMappingURL=script.js.map
