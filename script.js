//Funcion para verificar el input de Usuario si incluye mayusculas o caracteres especiales
function revisarMayusculas() {
    let inputUsuario = document.getElementById ("texto-original").value;
    let mayuscula = /[A-Z]/;
    let caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

       if (mayuscula.test(inputUsuario) || caracteresEspeciales.test(inputUsuario)) {
        alert('No se permiten letras mayusculas ni caracteres especiales');
    } else {
        encriptarTexto();
    }
}


//Funcion para encriptar el texto
function encriptarTexto() {
    let inputUsuario = document.getElementById ("texto-original").value;
    let textoEncriptado = inputUsuario.replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat');
    document.getElementById ("resultado-encriptado").value = textoEncriptado;
         }

    
//Funcion para copiar el texto cifrado o descifrado
function copiar() {
    let textoCopia = document.getElementById ("resultado-encriptado").value;
    navigator.clipboard.writeText(textoCopia)
        .then(() => {
            alert("El texto se ha copiado exitosamente.");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

  //Funcion para desencriptar la data
  function desencriptarTexto() {
    let inputUsuario = document.getElementById ("texto-original").value;
    let textoDesencriptado = inputUsuario.replaceAll(/enter/gi, 'e')
    .replaceAll(/imes/gi, 'i')
    .replaceAll(/ai/gi, 'a')
    .replaceAll(/ober/gi, 'o')
    .replaceAll(/ufat/gi, 'u');
    document.getElementById ("resultado-encriptado").value = textoDesencriptado;
 }