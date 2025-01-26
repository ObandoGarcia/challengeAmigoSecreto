// El principal objetivo de este desafío es fortalecer tus habilitates en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

//crear array para almacenar nombres
let amigos = [], amigo;

//crear funcion para agregar amigos
function agregarAmigo(){
    amigo = document.getElementById("amigo").value;

    //validar que el usuario haya ingresado un nombre valido
    if (amigo == "") {
        alert("Por favor, inserte un nombre");
    } else if (amigo.length <= 2){
        alert("Por favor, inserte un nombre válido");
    } else {
        amigos.push(amigo);
    }

    limpiarCampo();
    actualizarLista();
    agregarLista();
    console.log(amigos);
}

//funcion para limpiar el campo del formulario
function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

//funcion para actualizar la lista de amigos
function actualizarLista(){
    let elementoLista = document.querySelector('#listaAmigos');
    elementoLista.innerHTML = "";
}

//funcion para recorrer el arreglo de amigos y ponerlos en un elemento <li> de listaAmigos
function agregarLista(){
    for (i = 0; i < amigos.length; i++) {

        //crear el elemento <li>
        let li = document.createElement('li');

        //crear y asignar como un texto el nombre del amigo al elemento <li>
        let p = document.createTextNode(amigos[i]);
        li.appendChild(p);

        //agregamos el elemneto <li> a la lista
        let elementoLista = document.querySelector('#listaAmigos');
        elementoLista.appendChild(li);
    }
}

//funcion para sortear amigos del arreglo
function sortearAmigo(){
    if(amigos.length === 0){
        alert("La lista de amigos esta vacía agrega más nombre de tus amigos");
    } else if (amigos.length <= 2){
        alert("La lista de amigos debe tener al menos tres(3) nombres");
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(numeroAleatorio);

        //crear el elemento <li>
        let li = document.createElement('li');

        //crear y asignar como un texto el nombre del amigo al elemento <li>
        let p = document.createTextNode(amigos[numeroAleatorio]);
        li.appendChild(p);

        //agregamos el elemneto <li> a la lista
        let resultado = document.querySelector('#resultado');
        resultado.appendChild(li);
    }
}


