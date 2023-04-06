console.log('main.js load');
const name = 'Riza';
 //Ik kies voor de const omdat ik niet verwacht de waarde van de variabele te gaan veranderen
const surname = 'Incedal';
 //Ik kies voor de const om dezelfde redenen als de bovenste waarde, dat ik niet verwacht de waarde van de variable te gaan veranderen.
let answer = prompt('Geef een getal op alstublieft' , '5');
if (answer < 5) {
document.body.innerHTML+= `<p> Het getal is laag </p>`;
  } else if (answer < 10) {
    document.body.innerHTML += `<p> Het getal is hoog </p>`;
  } else if (answer > 10) {
    document.body.innerHTML += `<p> Het getal ligt niet tussen de 0 en 10 </p>`;
  } else {
    document.body.innerHTML += `<p> U heeft iets verkeerds ingevuld </p>`;
    }





