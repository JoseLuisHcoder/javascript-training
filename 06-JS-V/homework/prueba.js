function sumaTodosImpares(array){
    var array = [ 1, 5, 2, 9, 6, 4]
// La funcion llamada "sumaTodosImpares", recibe como argumento un array de enteros
// y debe devolver la suma total entre todos los numeros impares.
// ej:
// sumaTodosImpares ([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
// tu codigo:
var suma = 0
for(var i=0 ; i<array.length ; 1++){
    if(array[i] % 2 === 1)
    suma = suma + array[i]
}
console.log(suma);
return suma;

}