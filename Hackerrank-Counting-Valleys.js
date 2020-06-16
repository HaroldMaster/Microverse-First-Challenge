function valley(arr) {
  let acum = 0;
  let cont = 0;
  let array = [];
  let array_aux = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "D") {
      array.push(-1);
    } else {
      array.push(1);
    }
  }
  if (array[0] == -1) {
    array_aux.push(0);
    cont++;
  }
  for (let j = 0; j < array.length - 1; j++) {
    acum = acum + array[j];
    if (acum == 0) {
      console.log(arr[j + 1]);
      if (array[j + 1] == -1) {
        array_aux.push(j);
        cont++;
      }
    }
  }
  console.log(array);
  console.log(array_aux);
  return cont;
}
console.log(valley([U, D, D, D, U, D, U, U]));
