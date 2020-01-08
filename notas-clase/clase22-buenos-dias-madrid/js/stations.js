(()=>{
  const stationsUrl = 'http://airemad.com/api/v1/station';
  const divContainerDOM = document.getElementById('container');

  const getData = async (url, callback) => {
    let response = await fetch(url);
    let json = await response.json();
    callback(json);
  }  
  const showStations = (data) => {
    const ulDOM = document.createElement('ul')
    data.map(station => {
      const liDOM = document.createElement('li');
      liDOM.innerText = station.nombre_estacion;
      liDOM.setAttribute('data-id', station.id);
      ulDOM.appendChild(liDOM);
    })
    divContainerDOM.innerHTML='';
    divContainerDOM.appendChild(ulDOM);
    ulDOM.addEventListener('click', e => {
      console.log('station id: ',e.toElement.getAttribute('data-id'))
    });
  } 
  const getStations = () => getData(stationsUrl,showStations);

  document.addEventListener
  getStations();
})();