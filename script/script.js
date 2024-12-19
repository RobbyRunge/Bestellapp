let totalPrice = 0;
let deliveryCosts = 2.00;

function init() {
  renderDishes();
  renderBasket();
}

function openCart() {
  document.getElementById('overlay').style.display = "block";

  resetCart();
}

function offCart() {
  document.getElementById("overlay").style.display = "none";
}

function resetCart() {
  basket = [];
  renderBasket();
}

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
  let totalPrice = 0;

  for (let i = 0; i < basket.length; i++) {
    basketRef.innerHTML += getTemplateBasket(i); 
    totalPrice += basket[i].price * basket[i].quantity;
  }

  if (basket.length > 0) {
    basketRef.innerHTML += getTotalPriceTemplate(totalPrice, deliveryCosts);;
  } else {
    basketRef.innerHTML = "<p class='basket-empty-text'>Ihr Warenkorb ist leer.</p>";
  }
  
}

function addDishesToBasket(id) {
  let dish = myDishes.find(item => item.id === id);
  let existingDish = basket.find(item => item.id === id);

  if (existingDish) {
    existingDish.quantity++;
  } else {
    basket.push({ ...dish, quantity: 1 });
  }

  renderBasket();
}

function removeDishes(id) {
  let dishIndex = basket.findIndex(item => item.id === id);

  if (dishIndex !== -1) {
    if (basket[dishIndex].quantity > 1) {
      basket[dishIndex].quantity--;
    } else {
      basket.splice(dishIndex, 1);
    }
  }

  renderBasket();
}

function deleteDishes(id) {
  basket = basket.filter(item => item.id !== id);
  
  renderBasket();
}