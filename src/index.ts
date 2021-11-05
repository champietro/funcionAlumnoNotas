/*2) Escribir una función que permita al usuario ingresar 
5 nombres de alumnos y sus correspondientes notas de matemática, 
física y biología en 4 arreglos distintos. Una vez finalizada la 
carga el usuario debe poder pedir el nombre y las notas para una 
posición en particular.

Por ejemplo si invocamos a la función en cada carga sería algo
 de este estilo:
	arregloNombres=[“Juan”]
	arregloNotasMatematica=[8]
	arregloNotasFisica=[9]
	arregloNotasBiologia=[7]
	
Luego, el usuario puede consultar por los valores en una posición,
 por ejemplo, si pide los valores en la posición 0 se deberá mostrar 
 un mensaje similar a este:
	
	“Las notas del alumno: Juan son, matemática: 8, física: 9, biología: 7”
*/

let funcion = function () {
  let nombre, nota: string;
  let arregloNombres: string[] = new Array(2);
  let arregloNotasMatematica: string[] = new Array(2);
  let arregloNotasFisica: string[] = new Array(2);
  let arregloNotasBiologia: string[] = new Array(2);

  for (let i = 0; i < 5; i++) {
    nombre = prompt("Nombre:");
    arregloNombres[i] = nombre;

    nota = prompt("Nota de Matemática:");
    arregloNotasMatematica[i] = nota;

    nota = prompt("Nota de Fisica:");
    arregloNotasFisica[i] = nota;

    nota = prompt("Nota de Biologia:");
    arregloNotasBiologia[i] = nota;

    let posicion: Number = Number(prompt("Posición:"));
    console.log(
      "Las notas del alumno: " +
        arregloNombres[posicion] +
        "son:  matemática: " +
        arregloNotasMatematica[posicion] +
        ", física: " +
        arregloNotasFisica[posicion] +
        ", biología: " +
        arregloNotasBiologia[posicion]
    );
  }
};
funcion();
