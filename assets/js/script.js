const URL_BASE = 'https://digimon-api.vercel.app/';
const URL_DIGIMONS = URL_BASE+'api/digimon/name/'
const URL_LEVELS = URL_BASE+'api/digimon/level/'
let contenido, carta, nivel;


function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML +=`
                <tr>
                <td class="nombre-digimon">${temp.name}</td>
                <td><img class="imagen-miniatura" width="80rem" src="${temp.img}"></td>
                <td>${temp.level}</td>
            </tr>`;
    }
}

function digicards(info) {
    carta.innerHTML = "";

    for (let temp of info) {
        carta.innerHTML +=`
            <div class="card mb-3" style="max-width: 90rem;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${temp.img}" class="img-fluid rounded-start img-filtro" alt="Digicard">
                    </div>
                    <div class="col-md-8 estado">
                        <div class="card-body">
                            <h3>"${temp.name}"</h3>
                            <h5>${temp.level}</h5>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
}


function digibuscar() { 
    let digiName = document.getElementById("buscar").value;
    digiName = digiName.toLowerCase();
    document.getElementById("carta").style.display = "block";
    document.getElementById("tabla").style.display = "none";
    document.getElementById("nivel").style.display = "none";

    fetch(URL_DIGIMONS + digiName)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digicards(datos);
        });
}


function digilevel(filtro) {
    nivel.innerHTML = "";

    for (let temp of filtro) {
        nivel.innerHTML +=`
                <div class="contenedor-nivel">
                        <img class="imagen-nivel" src="${temp.img}" alt="Imagen Digimon filtrado">
                        <h5 class="nombre">${temp.name}</h5>
                </div>
            `
    }
}

function eggFilter() { 
    document.getElementById("fresh").value;
    document.getElementById("carta").style.display = "none";
    document.getElementById("tabla").style.display = "none";
    document.getElementById("nivel").style.display = "flex";

    fetch(URL_LEVELS + 'fresh')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digilevel(datos);
        });
}

function babyFilter() { 
    document.getElementById("training").value;
    document.getElementById("carta").style.display = "none";
    document.getElementById("tabla").style.display = "none";
    document.getElementById("nivel").style.display = "flex";

    fetch(URL_LEVELS + 'In Training')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digilevel(datos);
        });
}

function boyFilter() { 
    document.getElementById("rookie").value;
    document.getElementById("carta").style.display = "none";
    document.getElementById("tabla").style.display = "none";
    document.getElementById("nivel").style.display = "flex";

    fetch(URL_LEVELS + 'rookie')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digilevel(datos);
        });
}

function adultFilter() { 
    document.getElementById("champion").value;
    document.getElementById("carta").style.display = "none";
    document.getElementById("tabla").style.display = "none";
    document.getElementById("nivel").style.display = "flex";

    fetch(URL_LEVELS + 'champion')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digilevel(datos);
        });
}

function ultraFilter() { 
    document.getElementById("ultimate").value;
    document.getElementById("carta").style.display = "none";
    document.getElementById("tabla").style.display = "none";
    document.getElementById("nivel").style.display = "flex";

    fetch(URL_LEVELS + 'ultimate')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digilevel(datos);
        });
}

function megaFilter() { 
    document.getElementById("mega").value;
    document.getElementById("carta").style.display = "none";
    document.getElementById("tabla").style.display = "none";
    document.getElementById("nivel").style.display = "flex";

    fetch(URL_LEVELS + 'mega')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digilevel(datos);
        });
}

$(document).ready(function (){
    contenido = document.getElementById("contenido");
    carta = document.getElementById("carta");
    nivel = document.getElementById("nivel");

    fetch(URL_BASE+'api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
    });
})

