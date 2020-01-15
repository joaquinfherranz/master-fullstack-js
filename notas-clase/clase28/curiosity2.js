const token = "";

function NasaRequest(sol, limitRequests, frequency) {
  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+sol+'&api_key='+token;
  console.log('request started for: ', url);
debugger;
  let myPromise = new Promise((resolve,reject) => {
    fetch(url)
      .then(res=>{
        debugger;
        return res.json;
      })
      .then(data=>resolve(data))
      .catch(error=>reject(error))
  });
  myPromise
    .then(data=>{
      if(data.photos.length>0){
        return data;
      } else {
        console.log('Delay for next request ',frequency,'ms');
        setTimeout(NasaRequest(sol-1,limitRequests, frequency),frequency);
      }
    })
    .catch(error=>console.log('Error en la consulta:',error));
  
}; 

async function init() {
  /*
    - current sun: 2080
    - limit requests: false
    - frecuency: 1000ms
  */
  const currentValue = await NasaRequest(2080, false, 1000);
  console.log("currentValue:", currentValue);
}
init();