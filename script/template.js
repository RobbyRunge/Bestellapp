function getTemplateDishes(i) {
  return `
          <div class="dishes-container pd-16 border-shadow">
            <div class="headline-add-position">
              <h3 id="dishesName">${myDishes[i].name}</h3>
              <img onclick="addDishesToBasket(${i})" src="./assets/img/plus.png" alt="">
            </div>
            <p id="dishesDescription" class="pd-top-bottom-8">
              ${myDishes[i].description}
            </p>
            <p id="dishesPrice" class="price-style">${formatPrice(myDishes[i].price)}</p>
          </div>
          <br>`
}

function getTemplateHeadline(i) {
  return `
    <div>
      <h2 class="pd-16">${myDishes[i].headline}</h2>
    </div>`
}

function getTemplateHeadlineImg(i) {
  return `
    <div>
      <img id="headline-${myDishes[i].headImage}" class="image-content border-shadow" src="${myDishes[i].headImage}" alt="" />
    </div>`
}

function getTemplateBasket(i) {
  return `
    <div class="name-price-amount-position">
      <div class="number-buttons-position">
        <p>${basket[i].name}</p>
        <img onclick="deleteDishes(${i})" class="trash" src="./assets/img/trash.png" alt="" />
      </div>
      <p>Einzelpreis: <strong>${formatPrice(basket[i].price)}</strong></p>
      <p>Total: <strong>${formatPrice(basket[i].price * basket[i].quantity)}</strong></p>
      <div class="number-buttons-position">
        <p>Anzahl:</p>
        <div class="remove-quantity-add-position">
          <img onclick="removeDishes(${i})" class="plus-minus" src="./assets/img/minus.png" alt="" />
          <span><strong>${basket[i].quantity}</strong></span>
          <img onclick="addDishesToBasket(${i})" class="plus-minus" src="./assets/img/plus.png" alt="" />
        </div>
      </div>
    </div>
    <div class="border-basket"></div>`;
}

function getTotalPriceTemplate(totalPrice, deliveryCosts) {
  return `
    <div class="total-price-container">
      <p>Lieferkosten:<br> <strong>${formatPrice(deliveryCosts)}</strong></p><br>
      <p>Gesamtpreis (inkl. Lieferkosten):<br> <strong>${formatPrice(totalPrice + deliveryCosts)}</strong></p>
    </div><br>
    <div class="basket-buy-container">
      <button onclick="openCart()" class="basket-buy-position">Zur Kasse <img src="./assets/img/shopping-cart.png" alt="" /></button>
    </div>`;
}