const URL_BASE = 'https://digimon-api.vercel.app/';
const URL_DIGIMONS = URL_BASE+'api/digimon/name/'
let contenido;

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML +=`<tr>
                <td>${temp.name}</td>
                <td><img width="80rem" src="${temp.img}"></td>
                <td>${temp.level}</td>
            </tr>`;
    }
}

function digibuscar() { 
    let digiName = document.getElementById("buscar").value;
    digiName = digiName.toLowerCase();

    fetch(URL_DIGIMONS + digiName)
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
        console.log(datos)
    });

}

$(document).ready(function (){
    contenido = document.getElementById("contenido");

    fetch(URL_BASE+'api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
    });
})

