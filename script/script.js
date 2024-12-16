function init() {
  renderDishes();
  renderBasket();
}

let totalPrice = 0;
let deliveryCosts = 2.00; 

function formatPrice(price) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
}

function renderDishes() {
  let dishesRef = document.getElementById('content');
  dishesRef.innerHTML = "";
  for (let i = 0; i < myDishes.length; i++) {
    if (myDishes[i].headline) {
      dishesRef.innerHTML += getTemplateHeadlineImg(i);
      dishesRef.innerHTML += getTemplateHeadline(i);
    }
    dishesRef.innerHTML += getTemplateDishes(i);
  }
}

function renderBasket() {
  let basketRef = document.getElementById('basket-container-render')
  basketRef.innerHTML = "";
  for (let i = 0; i < basket.length; i++) {
    basketRef.innerHTML += getTemplateBasket(i); 
  }
}

function addDishesToBasket(i) {
  if (myDishes[i]) {
    basket.push(myDishes[i]);
  } 

  renderBasket();
}

function deleteDishes(i) {
  basket.splice(i, 1);

  renderBasket();
}