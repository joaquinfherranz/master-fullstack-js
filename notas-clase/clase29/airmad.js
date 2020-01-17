function $http(url){
  const core = (method, url, args) => {
    return new Promise ((resolve, reject)=>{
      let xmlHttp = new XMLHttpRequest();     
      
      xmlHttp.onreadystatechange = () => {
        // try {

          if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            if (xmlHttp.response=='404') {
              reject('Error 404');
            } else {
              resolve(JSON.parse(xmlHttp.responseText));              
            } 
          } else if (xmlHttp.readyState === 4) {
            reject('Error '+xmlHttp.status);   
            // console.error("ERROR! 404");
            //   console.info(JSON.parse(xmlHttp.responseText));
          }
        // }
        // catch (e) {
        //   reject(e);
        // }

      };
      xmlHttp.open(method, url, true); // asincrona
      xmlHttp.send();
      xmlHttp.onerror = function () {
        reject(this.statusText);
      }
      
    })
    // .catch(error=>reject('Error en send'))
    
  }

  return {
    get: () => core('GET', url)
  }
}

// var prueba = $http('http://airemad.com/api/v1/station').get();

// console.log('prueba=', prueba);

$http("http://airemdaad.com/api/v1/station")
  .get()
  .then(data => {
    let content = ""
    data.forEach(element => {
      content += `<li>La estación ${element.nombre_estacion} (${element.id}) está en ${element.direccion}</li>`
    })
    document.body.innerHTML = `<ul>${content}</ul>` 
  })
  .catch(err=>console.log(err));