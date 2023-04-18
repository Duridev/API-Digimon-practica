const URL_BASE = 'https://digimon-api.vercel.app/';
const URL_DIGIMONS = URL_BASE+'/api/digimon/name/'
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

digibuscar() {

}

$(document).ready(function (){
    contenido = document.getElementById("contenido");

    fetch(URL_BASE+'api/digimon')
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        tabla(datos);
    });
})

