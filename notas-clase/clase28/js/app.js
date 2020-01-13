const API_KEY = "SSTYTHghJ0gGpRp8QrStgLXG4xnKz5g4EtBGmRix";

const getData = async (url, callback) => {
  let response = await fetch(url);
  let json = await response.json();
  callback(json);
}

const getUrl = (sol) => {
  return 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+ sol +'&api_key=' + API_KEY;
}

const nasaRequest = async (currentSol, limitRequests, frecuency) => {
  let url = getUrl(currentSol);
  let response = await fetch(url);
  let json = await response.json();
  return json;  
}

const init = async () => {
  /*
    - current sun: 2080
    - limit requests: false
    - frecuency: 1000ms
  */
 const currentValue = await nasaRequest(2080, false, 1000);
 console.log("currentValue:", currentValue);
}

init();
