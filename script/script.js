function init() {
  renderDishes();
  renderBasket();
}

function formatPrice(price) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
}

function renderDishes(indexDishes) {
  let dishesRef = document.getElementById('content');
  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < myDishes.length; indexDishes++) {
    if (myDishes[indexDishes].headline) {
      dishesRef.innerHTML += getTemplateHeadlineImg(indexDishes);
      dishesRef.innerHTML += getTemplateHeadline(indexDishes);
    }
    dishesRef.innerHTML += getTemplateDishes(indexDishes);
  }
}

function renderBasket(indexDishes) {
  let basketRef = document.getElementById('basket-container-render')
  basketRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < basket.length; indexDishes++) {
    basketRef.innerHTML += getTemplateBasket(indexDishes); 
  }
}

function addDishesToBasket(indexDishes) {
  basket.push(myDishes[indexDishes]);
  renderBasket();
}

// function deleteDishes (indexBasket) {
//   basket.splice(myDishes[indexBasket])
// }