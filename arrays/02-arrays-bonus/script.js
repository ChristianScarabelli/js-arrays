const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = teachers.reverse();  modifica l'array originale!
const reversedTeachers = teachers.toReversed()
console.log('Reversed Array:', reversedTeachers)  // new array

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []

for ( i = 0; i < teachers.length; i++) {
  const currentName = teachers[i]
  console.log(currentName)

  if (currentName.length >= 5) {
    longNames.push(currentName)
  }
}
console.log(longNames)

// const longNames = teachers.filter((word) => word.length >= 5);
// console.log('Min 5 Chars Names:', longNames);  // array


// 3. Rimuovi 'Ed' dall'array teachers
const EdIndex = teachers.indexOf('Ed')   // number  
if (EdIndex >= 0) {
  // rimuovere elemento all'indice di Ed index
  teachers.splice(EdIndex, 1)

}

console.log('Ed out of arrays.', teachers)  // array
