console.log('ciao mondo')

//Creo un ciclo di numeri che si ripete 100 volte

for (let i = 0; i < 100; i++) {

  //Definisco una variabile che abbia come valore il numero di ciclo + 1

  let num = i + 1;

  //Se il numero è sia multiplo di tre che di 5 stampo Fizzbuzz
  if (num % 3 == 0 && num % 5 == 0) {
    console.log('Fizzbuzz')
    //E se è multiplo solo di 3 stampo Fizz
  } else if (num % 3 == 0) {
    console.log('Fizz')
    //E se è multiplo solo di 5 stampo Buzz
  } else if (num % 5 == 0) {
    console.log('Buzz')
    //Altrimenti stampo il numero
  } else {
    console.log(num)
  }
}
