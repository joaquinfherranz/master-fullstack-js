var NasaRequest = (sol, limitRequets, frequency) => {
  const token = "";
  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+sol+'&api_key='+token;
  console.log('request started for: ', url);
  
  return new Promise((resolve, reject)=>{
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        //console.log('photos=',data.photos);
        if (data.photos.length>0) {
          resolve (data.photos)
        } else {
          console.log(`Delay for next request ${frequency}ms`);
          setTimeout(()=>resolve(NasaRequest(sol-1,limitRequets,frequency)),frequency);
          //resolve(NasaRequest(sol-1,limitRequets,frequency));
        }
      })
      .catch(error=>reject(error));
  });
}

var init = async () => {
  const currentValue = await NasaRequest(2180, false, 1000);
  console.log("currentValue:", currentValue);
  document.getElementById('imgId').setAttribute("src", currentValue[0].img_src);
}

init();

// var init = async (sol, times=0) => {
//   let newSol
  
//     const currentValue = await NasaRequest(sol, false, 1000);
//     console.log("currentValue:", currentValue);
//     document.getElementById('imgId').setAttribute("src", currentValue[0].img_src);
//     newSol=currentValue.sol-1;
//     times=times+1
//     if (times < 10) {
//       setTimeout(()=>init(newSol, times),2000);
//     }
    
  
// }

// init(2080);