function validation() {
    
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const fecha = document.getElementById('fecha');
    const email = document.getElementById('email');
    const sexo = document.getElementsByName('sexo');
    const provincia = document.getElementById('provincia');
    const terminos = document.getElementById('terminos');
    let correcto = true;

    if (nombre.value === "") {
        document.getElementById('nombreHelp').style.display = "block";
        nombre.style.borderColor = "red";
        correcto = false ;
    }

    if (apellidos.value === "" ) {
        document.getElementById('apellidosHelp').style.display = "block";
        document.getElementById('apellidos').style.borderColor = "red";
        correcto = false ;
    }

    if (fecha.value === "") {
        document.getElementById('fechaHelp').style.display = "block";
        document.getElementById('fecha').style.borderColor = "red";
        correcto = false ;
    }

    if (email.value == "" || !( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value))) {
        document.getElementById('emailHelp').style.display="block" ;
        document.getElementById('email').style.borderColor="red" ;
        correcto = false ;
    }

    if (!sexo[0].checked && !sexo[1].checked && !sexo[2].checked) {
        document.getElementById('sexoHelp').style.display = "block";
        correcto = false ;
    }

    if(provincia.value == "" ) {
        document.getElementById('provinciaHelp').style.display = "block";
        correcto = false ;
    }

    if (!terminos.checked) {
        document.getElementById('terminosHelp').style.display = "block";
        correcto = false ;
    }
    
    return correcto;

}

function resetear(id) {
    document.getElementById(id + 'Help').style.display="none";
    document.getElementById(id).style.borderColor="#03e9f4";
}

function resetearSexo(id) {
    document.getElementById(id + 'Help').style.display="none";
}