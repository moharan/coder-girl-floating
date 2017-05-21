//alert("existe");
function validar() {
    var nombre = document.getElementById("nombre").value;
    //console.log(nombre);
    var email = document.getElementById("email").value;
    //console.log(email);
    var asunto = document.getElementById("asunto").value;
    //console.log(asunto);
    var mensaje = document.getElementById("mensaje").value;
    //console.log(mensaje);
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nombre == null || nombre.length == 0) {
    	alert("Nombre, No se puede dejar el campo vacio");
        console.log(nombre + " Esta vacio");
    } else if (nombre.substring(0, 1) !== nombre.substring(0, 1).toUpperCase()) {
    	alert("Nombre, Falta mayusculas inicial");
        console.log(nombre + " Falta mayusculas inicial");
    } else {
        console.log(nombre + " Valido");
    }
    if (email == null || email.length == 0) {
    	alert("Email, No se puede dejar el campo vacio");
        console.log(email + " Esta vacio");
    } else if (!correo.test(email)) {
    	alert("Email, Debe ser un correo valido");
        console.log(email + " agregar @");
    } else {
        console.log(email + " Valido");
    }
    if (asunto == null || asunto.length == 0) {
    	alert("Asunto, No se puede dejar el campo vacio");
        console.log(asunto + " Esta vacio");
    } else {
        console.log(asunto + " Valido");
    }
    if (mensaje == null || mensaje.length == 0) {
    	alert("Mensaje, No se puede dejar el campo vacio");
        console.log(mensaje + " Esta vacio");
    } else if (mensaje.length > 100) {
    	alert("Mensaje, No deben ser mas de 100 caracteres");
        console.log(mensaje + " No deben ser mas de 100 caracteres");
    } else {
        console.log(mensaje + " Valido");
    }
    // despues de validar dejar vacios
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
}

function inscribete() {
	document.getElementById("principal").innerHTML = "Y el Mundo también cambia a las Chicas";
}

function hackathon() {
	document.getElementById("hackathon01").setAttribute("class", "hackathon01-a"); 
	//console.log(x);
}
