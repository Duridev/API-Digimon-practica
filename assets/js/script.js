const URL_BASE = 'https://digimon-api.vercel.app/';
let contenido = document.getElementById("contenido");


function tabla(datos) {
    contenido.innerHTML = "";

for (let temp of datos) {
    contenido.innerHTML +=
        `<tr>
            <th scope="row">${datos.lenght}</th>
            <td>${temp.name}</td>
            <td>${temp.img}</td>
            <td>${temp.level}</td>
        </tr>`;
    }
}

fetch(URL_BASE+'api/digimon')
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        tabla(datos);
    })
