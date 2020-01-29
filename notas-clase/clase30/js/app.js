
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
    const renderStations = (stations) => {
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
        .then(data=>renderStations(data));
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
    const renderStation = (station) => {
        const renderSection = (sectionContent, lastSection=false) => `<section>${sectionContent}</section>${lastSection?'':'<br>'}`;
        
        const renderDetails = (details) => `
            <h4>${details.nombre_estacion}</h4>
            <p>Dirección: ${details.direccion}<br>Altitud: ${station.details.altitud}</p>
        `;
        const renderWeather = (weather) => `<p>Temperatura: ${weather?`${weather.main.temp}º ${weather.weather[0].description}`:'no disponible'}</p>`;
        
        const renderPollen = (mediciones) => mediciones
            ? Object.keys(mediciones).map(polen=>`<p>Polen ${polen}: ${mediciones[polen].valor} (${mediciones[polen].resumen})</p>`).join('')
            : '<p>Polen: no disponible</p>';
        
        const html = 
            renderSection(renderDetails(station.details))+
            renderSection(renderWeather(station.weather.list[0]))+
            renderSection(renderPollen(station.pollen.mediciones));

        appElement.innerHTML=html;
    }
    const stationDetailsPromise = stationPromise('station');
    const stationWeatherPromise = stationPromise('weather');
    const stationPollenPromise = stationPromise('pollen');
    const stationPollutionPromise = stationPromise('pollution');
    const stationAcusticPromise = stationPromise('acustic');

    Promise.all([
        stationDetailsPromise,
        stationWeatherPromise,
        stationPollenPromise,
        stationPollutionPromise,
        stationAcusticPromise
        ])
        .then(([details, weather, pollen, pollution, acustic]) => { 
            renderStation({
                'details': details,
                'weather': weather,
                'pollen': pollen,
                'pollution': pollution,
                'acustic': acustic
            });
        });

}

const initializeRouter = () => {
    page('/', main);
    page('/estacion', stations);
    page('/estacion/:id', station);
    page('*', main);
    
    //page.base('/base');

    page();    
    page('/');
}

initializeRouter();
