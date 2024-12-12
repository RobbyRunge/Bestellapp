function init() {
  renderDishes();
}

function renderDishes(indexDishes) {
  let dishesRef = document.getElementById('content');
  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < myDishes.length; indexDishes++) {
    dishesRef.innerHTML += getTemplateDishes(indexDishes);
  }
}