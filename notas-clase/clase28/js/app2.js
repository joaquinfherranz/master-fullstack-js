const API_KEY = "SSTYTHghJ0gGpRp8QrStgLXG4xnKz5g4EtBGmRix";

const getData = async (url, callback) => {
  let response = await fetch(url);
  let json = await response.json();
  callback(json);
}

const getUrl = (sol) => {
  return 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+ sol +'&api_key=' + API_KEY;
}

const nasaRequest = async (currentSol) => {
  let url = getUrl(currentSol);
  let response = await fetch(url);
  let json = await response.json();
  return json;  
}

const init = async (currentSol=2180, maxRequets=20, frequency=1000) => {
  debugger;
  if (maxRequets) {
    const currentValue = await nasaRequest(currentSol);
    if (currentValue.photos.length) {
      console.log("currentValue:", currentValue);
    } else {
      setTimeout(init(currentSol-1, maxRequets-1, frequency), frequency);
    }
  } else {
    console.log ('Ha ejecutado el límite de peticiones permitidas');
  }
 
}

init();