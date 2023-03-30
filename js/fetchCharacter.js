function sendCharacter(){
    //Obtener el valor del input
    const character = document.getElementById('nameCharacter').value;
    //Obtener el elemento donde se mostrará el resultado
    const result = document.getElementById('result');
    result.innerHTML = "";

    //Comprobamos el valor del input
    if(character === ""){
        //Mostramos msj de error
        const nombre = document.createElement('h1');
        nombre.innerText = ('Ingrese el nombre del personaje, por favor.');
        result.appendChild(nombre);
    }else{
        //Llamado a la API
        fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then(response => response.json())
        .then(data => {
            //Recorremos la data 
            data.results.forEach(character => {

                //Creamos el elemento donde se mostrará el nombre
                const nombre = document.createElement('p');
                //Agregar el nombre al elemento
                nombre.innerText = character.name;
                //Agregar el elemento al resultado
                result.appendChild(nombre);
        
                //Creamos el elmento donde se mostrará la imagen
                const imagen = document.createElement('img');
                //Agregar la imagen al elemento
                imagen.src = character.image;
                //Agregar el elemento al resultado
                result.appendChild(imagen);
            });

        })
        .catch(error => console.error(error));
    }

}