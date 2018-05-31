window.cipher = {
  encode: (text, shift) => {
    let textCipher = "";
    let tUpper;   
    shift = parseInt(shift); 
    //formula de iteración i
    for (let i= 0; i<text.length;i++){
     //volver texto a mayúscula
      let tUpper = text.toUpperCase(i);
      let finalT = tUpper.charCodeAt(i);
      // Formula Michelle
      
     //Para espacio entre palabras
      if (finalT === 32){
        textCipher += " ";
        } else{ 
       //vuelvo a transformar a string el caracter numerico desplazado  
       let finalTxt = (finalT - 65 + parseInt(shift)) % 26 + 65; 
       textCipher+= String.fromCharCode(finalTxt);
       }   
    }
    //Respuesta final:
    return "Tu Cifrado es: " + textCipher;

  },

  decode: (text2, shiftD) => {
    let textDecipher = "";
    shiftD = parseInt(shiftD);
    //Iteración
    for (let i= 0; i<text2.length; i++){
      //volver texto en mayúsculas
      let tUpperD = text2.toUpperCase();
      let finalTD = (tUpperD.charCodeAt(i));
      //Para los espacios 32(es espacio) así que mostarra espacio
      if (finalTD === 32){
        // no sobrescribe, se suman 
        textDecipher += " ";
        } else { 
        let resultD = (finalTD - 65 - parseInt(shiftD)) % 26 + 65;
        if (resultD < 65) {
          resultD +=26;
        }
        let showD = String.fromCharCode(resultD);
        textDecipher += showD;
      }
        }
        return "Tu Decifrado es: " + textDecipher;
    }
   }
  

