window.onload = ()=> {

  //Primer bloque (Cifrado)
  let shift1 = document.getElementById("shift1");
  let msje1 = document.getElementById("msje1"); 
  //Botón 1:
  const btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", () => {
      let msje1 = document.getElementById("msje1").value;
      let shift1 = document.getElementById("shift1").value;
      //Respuesta:
      document.getElementById("res").innerHTML = window.cipher.encode(msje1, shift1);
  }) 
  //Segundo Bloque (Decifrado)
  let shift2 = document.getElementById("shift2");
  let msje2 = document.getElementById("msje2"); 
  //Botón 2:
  const btn2 = document.getElementById("btn2");
  btn2.addEventListener("click", () => {
      let msje2 = document.getElementById("msje2").value;
      let shift2 = document.getElementById("shift2").value;
      //Respuesta:
      document.getElementById("msje_descifrado").innerHTML = window.cipher.decode(msje2, shift2);
  }) 

}




