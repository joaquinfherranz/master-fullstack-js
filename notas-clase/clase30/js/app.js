
const appElement = document.getElementById('app');

const main = () => {
    let html = `
        <p>Bienvenido a la app de enrutado de airmad</p>
        <br>
        Consulte las <a href="/estacion">estaciones</a>
    `;
    appElement.innerHTML=html;
}

const stations = () => {
    const showStations = (stations) => {
        let html = `
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
    fetch('http://airemad.com/api/v1/station')
    .then(response=>response.json())
    .then(data=>showStations(data));
}

const station = (ctx) => {
    const id = ctx.params.id;
    const showStation = (station) => {
        debugger;
        let html = `
            <p>Estas son las distintas estaciones meteorológicas de Madrid:</p>
            <ul>
            ${stations.map(station=>`<li><a href="/estacion/${station.id}">${station.nombre_estacion}</a></li>`).join('')}
            </ul>
        `;
        appElement.innerHTML=html;
    }
    fetch('http://airemad.com/api/v1/station/'+id)
    .then(response=>response.json())
    .then(data=>showStation(data));
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
