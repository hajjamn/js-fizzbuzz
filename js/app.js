console.log('ciao mondo')

//Creo un ciclo di numeri che si ripete 100 volte

for (let i = 0; i < 100; i++) {

  //Definisco una variabile che abbia come valore il numero di ciclo + 1

  let num = i + 1;
  const rowElement = document.querySelector('.row')

  //Se il numero è sia multiplo di tre che di 5 stampo Fizzbuzz
  if (num % 3 == 0 && num % 5 == 0) {
    rowElement.innerHTML += `<div class="col card text-center p-5 bg-danger">Fizzbuzz</div>`
    //E se è multiplo solo di 3 stampo Fizz
  } else if (num % 3 == 0) {
    rowElement.innerHTML += `<div class="col card text-center p-5 bg-warning">Fizz</div>`
    //E se è multiplo solo di 5 stampo Buzz
  } else if (num % 5 == 0) {
    rowElement.innerHTML += `<div class="col card text-center p-5 bg-success">Buzz</div>`
    //Altrimenti stampo il numero
  } else {
    rowElement.innerHTML += `<div class="col card text-center p-5">${num}</div>`
  }
}
