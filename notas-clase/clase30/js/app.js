
const appElement = document.getElementById('app');

const main = () => {
    const html = `
        <p>Bienvenido a la app de enrutado de airmad</p>
        <br>
        Consulte las <a href="/estacion">estaciones</a>
    `;
    appElement.innerHTML=html;
}

const rootUrl = 'http://airemad.com/api/v1/';
const stations = () => {
    const showStations = (stations) => {
        const html = `
            <p>Estas son las distintas estaciones meteorológicas de Madrid:</p>
            <ul>
            ${stations.map(station=>`
                <li>
                    <strong><a href="/estacion/${station.id}">${station.nombre_estacion}</a></strong>
                    <br>
                    <span>${station.direccion}</span>
                </li>
            `).join('')}
            </ul>
        `;
        appElement.innerHTML=html;
    }
    fetch(rootUrl+'station')
    .then(response=>response.json())
    .then(data=>showStations(data));
}

const station = (ctx) => {
    const id = ctx.params.id;
    const stationPromise = (pathUrl) => {
        return new Promise ((resolve, reject) => {
            fetch(rootUrl+pathUrl+'/'+id)
                .then(response=>response.json())
                .then(data=>resolve(data))
                .catch(error=>reject(error));
        });
    }
    const showStation = (station) => {
        let html = `
            <h1>${station.details.nombre_estacion}</h1>
            <p>Dirección: ${station.details.direccion}<br>Altitud: ${station.details.altitud}</p>
        `;
        appElement.innerHTML=html;
    }
    const stationDetailsPromise = stationPromise('station');
    const stationWeatherPromise = stationPromise('weather');
    const stationPollenPromise = stationPromise('pollen');

    Promise.all([stationDetailsPromise, stationWeatherPromise, stationPollenPromise])
        .then(([details, weather, pollen]) => { 
            showStation({details:details, weather:weather, pollen:pollen});
        });

}

const initializeRouter = () => {
    page('/', main);
    page('/estacion', stations);
    page('/estacion/:id', station);
    page('*', main);
    
    page();    
    page('/');
}

initializeRouter();
