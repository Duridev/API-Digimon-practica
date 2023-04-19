const URL_BASE = 'https://digimon-api.vercel.app/';
const URL_DIGIMONS = URL_BASE+'api/digimon/name/'
let contenido, carta;


function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML +=`
                <tr>
                <td>${temp.name}</td>
                <td><img width="80rem" src="${temp.img}"></td>
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
                    <img src="${temp.img}" class="img-fluid rounded-start" alt="Digicard">
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

    fetch(URL_DIGIMONS + digiName)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            digicards(datos);
        });
}





$(document).ready(function (){
    contenido = document.getElementById("contenido");
    carta = document.getElementById("carta");

    fetch(URL_BASE+'api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
    });
})

