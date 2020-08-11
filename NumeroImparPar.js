 var numeros = [1,2,3,4,5]

 function MenorMaior (){

     for( var i = 0; i < numeros.length; i++){
         if(numeros[i] == 1 || numeros[i] == 3 || numeros[i] == 5){
             console.log('Numeros Impar: ' + numeros[i])
         }else {
             console.log('Numeros Par: '+ numeros[i])
         }
     }

     return numeros
 }

 MenorMaior()
