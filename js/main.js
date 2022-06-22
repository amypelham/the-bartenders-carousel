//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', findDrink)

let counter = 0

function findDrink() {

  let drinkName = document.querySelector('input').value;

  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(data => data.json())
    .then(item => {
      document.querySelector('.name').innerText = item.drinks[counter].strDrink;
      document.querySelector('img').src = item.drinks[counter].strDrinkThumb;
      document.querySelector('.instructions').innerText = item.drinks[counter].strInstructions;
      document.querySelector('.glassType').innerText = item.drinks[counter].strGlass;
      document.querySelector('.ingredients1').innerText = item.drinks[counter].strIngredient1;
      document.querySelector('.ingredients2').innerText = item.drinks[counter].strIngredient2;
      document.querySelector('.ingredients3').innerText = item.drinks[counter].strIngredient3;
      document.querySelector('.ingredients4').innerText = item.drinks[counter].strIngredient4;
      document.querySelector('.ingredients5').innerText = item.drinks[counter].strIngredient5;
      document.querySelector('.ingredients6').innerText = item.drinks[counter].strIngredient6;


      let length = item.drinks.length
      if (counter > length - 2) {
        counter = 0;
      } else {
        counter += 1
      }
    })
}
setInterval(findDrink, 5000)

