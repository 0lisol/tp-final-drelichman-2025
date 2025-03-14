 //* JUEGO *//          

 let correctas=[3,1,2,3,1]; //declaracion de las correctas, aca decimos cuales son las corectas.
 let opciones_elegidas=[]; //arreglo donde guardarn las respuestas del usuario
 let cantidad_correctas=0; //arreglo para las correctas que inician en 0

 function respuesta(num_pregunta,seleccionada){ //función que toma el número de pregunta y la opción seleccionada

opciones_elegidas[num_pregunta]=seleccionada.value; //guardo la respuesta elegida

id="p" + num_pregunta;
labels=document.getElementById(id).childNodes;  //Si selecciona otra opción, pone la anterior en blanco
labels[3].style.backgroundColor="white";
labels[5].style.backgroundColor="white";
labels[7].style.backgroundColor="white";

seleccionada.parentNode.style.backgroundColor=" rgb(178, 255, 178)";//doy el color a la opción seleccionada
}

function corregir(){//función que compara los arreglos para saber cuantas acertaron

  cantidad_correctas=0;
  for(i=0 ;i <correctas.length; i++)
  {
    if(correctas[i]==opciones_elegidas[i]){
    cantidad_correctas++;
    }
  }
document.getElementById("resultado").innerHTML=cantidad_correctas;

}
