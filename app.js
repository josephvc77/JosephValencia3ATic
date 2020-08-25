function validar(){
	var nombre, ultimo, email, telefono, domicilio, direccion2, ciudad, estado, postal, fecha;

nombre = document.getElementById("nombre").value;
ultimo = document.getElementById("ultimo").value;
email = document.getElementById("email").value;
telefono = document.getElementById("telefono").value;
domicilio = document.getElementById("domicilio").value;
direccion2 = document.getElementById("direccion2").value;
ciudad = document.getElementById("ciudad").value;
estado = document.getElementById("estado").value;
postal = document.getElementById("postal").value;
fecha = document.getElementById("fecha").value;


if(nombre === "" || ultimo==="" || email==="" || telefono==="" || domicilio==="" || direccion2===""
	|| ciudad==="" || estado==="" || postal==="" || fecha===""){
	alert("Todos los campos son obligatorios");
	return false;
}
}