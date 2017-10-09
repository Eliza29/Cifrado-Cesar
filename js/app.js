//Cifrado Cesar
//Le pedimos al usuario que ingrese una frase mediante prompt.
do {
  var phrase = prompt('Escribe una frase');
} while(!phrase || !isNaN(phrase));//El usuario no podra ingresar un campo vacío o que contenga números
//Creamos la funcion cipher para encriptar el mensaje
function cipher(phrase){
    var encryptedString= '';//Creamos una variable donde se va almacenar la frase encritada

    for(var i=0; i < phrase.length; i++){//recorremos por todos los elementos de la frase
    if (phrase.charCodeAt([i])>= 65 && phrase.charCodeAt([i])<= 90){//la condicion nos permite devolver mayusculas
    encryptedString+= String.fromCharCode((phrase.charCodeAt([i])-65+33)% 26+ 65)
      }//La formula hace que cada elemento de la frase recorra 33 espacios en el abecedario.
    else if (phrase.charCodeAt([i])>= 97 && phrase.charCodeAt([i])<= 122){//la condicion nos permite devolver minusculas
    encryptedString+= String.fromCharCode((phrase.charCodeAt([i])-97+33)% 26+ 97)
     }
    }
return encryptedString;//Nos da la nueva frase encriptada
}
console.log (cipher(phrase));
//Creamos la funcion decipher para decifrar el mensaje
function decipher(phrase){

    var newPhrase= cipher(phrase);
    var decipherString= '';

    for(var j=0; j < newPhrase.length; j++){
    if (newPhrase.charCodeAt([j])>= 65 && newPhrase.charCodeAt([j])<= 90){
    decipherString+= String.fromCharCode((newPhrase.charCodeAt([j])-65-33)% 26+65);
      }
    else if (newPhrase.charCodeAt([j])>= 97 && newPhrase.charCodeAt([j])<= 122){
    decipherString+= String.fromCharCode((newPhrase.charCodeAt([j])-97-33)% 26+97)
     }
    }
return decipherString;
}

console.log (decipher(phrase));
