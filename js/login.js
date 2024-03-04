function validation(e) {

    e.preventDefault()
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    let correcto = true;
    
    if (user === "" || !(user.length >= 8 && user.length <= 12)) {
        document.getElementById('userHelp').style.display = "block";
        document.getElementById('user').style.borderColor = "yellow";
        correcto = false;
    }
    
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(password))) {
        /* alert("La contraseña debe contener entre 8 y 15 caracteres, una mayúscula, una minúscula y un número") */
        document.getElementById('passwordHelp').style.display = "block";
        document.getElementById('password').style.borderColor = "yellow";
        correcto = false;
    }

    return correcto;

}

function resetear(id) {
    document.getElementById(id + 'Help').style.display="none";
    document.getElementById(id).style.borderColor="#03e9f4";

}

