
const form = document.getElementById('sugerencia');

//Validamos los campos del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const idType = document.getElementById('id-type').value;
    const nombre = document.getElementById('name').value;
    const telefono = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const comentario = document.getElementById('coment').value;

    if(idType === ''){
        alert('Por favor, seleccione una opcion.');
        return false;
    }
    if(nombre === ''){
        alert('Por favor, ingrese su nombre');
        return false;
    }
    if(telefono === ''){
        alert('Por favor, ingrese su telefono');
        return false
    }
    if(email === ''){
        alert('Por favor, ingrese su email');
        return false;
    }
    if(asunto === ''){
        alert('Por favor, ingrese su asunto');
        return false;
    }
    if(comentario === ''){
        alert('Por favor, ingrese su comentario');
        return false;
    }
    //Si todos los campos tienen valores, se envia el formulario
    alert('Su petición se ha enviado.');
    form.submit();
});

