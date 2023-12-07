"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

//Opcion 1 -----------

//Funcion para LEER los DATOS

//EVENTO onclik en boton consultar
// mandar a LEER los DATOS


//Opcion 2 -------

//Hacer todo en una funcion: en Evento

//--- Enunciado 2
//Renderizar

const dominio = "https://rickandmortyapi.com"
const consultar = document.getElementById('btnConsultar')

consultar.onclick = async () => {    
    const personaje = document.getElementById('personaje').value;
    
    const url = `${dominio}/api/character/?name=${personaje}`;
    const resp = await fetch(url);
    
    if(personaje == "") {   
        alert("No escribió ningún nombre. Intente de nuevo");
    
    } else if(resp.ok) {
        const datos = await resp.json();
        
        const dato = datos.results[0];
        console.log(dato);

        let accumulator = ""
            accumulator += 
                `
                <div id="imagen">
                    <img src=${dato.image} alt="">
                </div>
                <div id="info">
                    <h2 id="name">${dato.name}</h2>
                    <p id="status">Estado: ${dato.status}</p>
                    <p id="species">Especie: ${dato.species}</p>                                       
                </div>
                `;
        const section = document.querySelector("#renderizar");
        section.innerHTML = accumulator;
                
    } else {
    alert("Falló la petición");
    }
}