//page.base('/routing/');

page('/', main);
page('/estaciones', stations);
page('/estacion/:id', station);
page('*', main);
page();

function main() {
    document.getElementById('app').innerHTML = `
        <p>Bienvenido a la app de enrutado de airmad</p>
        <br>
        Consulte las estaciones <a href="/estaciones">estaciones</a>
        `;
}

function stations() {
    const showStations = (stations) => {
        let divHtml = `
            <a href="/">Home</a>
            <ul>
            ${stations.map(station=>`<li><a href="/estacion/${station.id}">${station.nombre_estacion}</a></li>`).join('')}
            </ul>
            `;
        document.getElementById('app').innerHTML = divHtml;
    }
    fetch('http://airemad.com/api/v1/station')
        .then(response=>response.json())
        .then(data=>showStations(data));    
}

function station(ctx) {
    document.getElementById('app').innerHTML = `viewing estation ${ctx.params.id}`;
}


page('/');
