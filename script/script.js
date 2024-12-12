function init() {
  renderDishes();
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