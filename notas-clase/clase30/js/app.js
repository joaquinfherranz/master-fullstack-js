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
        // const stationHtml = (station) => `
        //     Estación ${station.nombre_estacion}
        // `;
        let divHtml = `
            <a href="/estaciones">Home</a>
            <ul>
            ${stations.map(station=>`<li>${station.nombre_estacion}</li>`).join('')}
            </ul>
            `;
        
            //${stations.map(station=>"<li>"+station.nombre_estacion+"</li>").join('')}
            //${stations.map(station=>divHtml+="<li>"+station.nombre_estacion+"</li>")}


        document.getElementById('app').innerHTML = divHtml;
    }
    fetch('http://airemad.com/api/v1/station')
        .then(response=>response.json())
        .then(data=>showStations(data));
    
    
}

function station(id) {
    document.getElementById('app').textContent = 'viewing estation';
}


page('/');
