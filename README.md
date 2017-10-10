# PSEUDOCODIGO
### Cifrado Cesar

INICIO  
Hacer  
(variable phrase =Escribir "Escribe una frase");  
Mientras (!phrase || !isNaN(prase))  
Fin Hacer;

Funcion cipher(phrase)  
variable: EncryptedString= vacio  
Para  i=0 hasta longitud de phrase hacer  
Si (phrase.charCodeAt([i])>= 65 && phrase.charCodeAt([i])<= 90 && phrase.charCodeAt([i])!=32)) Entonces  
encryptedString+= String.fromCharCode((phrase.charCodeAt([i])-65+33)% 26+ 65);  
Si no si (phrase.charCodeAt([i])>= 97 && phrase.charCodeAt([i])<= 122 && phrase.charCodeAt([i])!=32) Entonces  
encryptedString+= String.fromCharCode((phrase.charCodeAt([i])-97+33)% 26+ 97);  
Fin Si  
retornar encryptedString     
Fin Funcion

Funcion decipher(phrase)  
variables: newPhrase= cipher(phrase), decipherString= vacio;  
Para  i=0 hasta longitud de newPhrase hacer  
Si (newPhrase.charCodeAt([i])>= 65 && newPhrase.charCodeAt([i])<= 90 && phrase.charCodeAt([i])!=32) Entonces  
  decipherString+= String.fromCharCode((newPhrase.charCodeAt([i])-65)-33%26+65);
  Si no si (newPhrase.charCodeAt([i])>= 97 && newPhrase.charCodeAt([i])<= 122 && phrase.charCodeAt([i])!=32) Entonces  
  decipherString+= String.fromCharCode((newPhrase.charCodeAt([i])-97)-33%26+97);  
  Fin Si  
  retornar decipherString;    
  Fin Funcion  
  FIN

  [DIAGRAMA DE FLUJO] (https://drive.google.com/file/d/0Bz7FI76KT0SfNG9UZ18tTjViSUk/view?usp=sharing)
