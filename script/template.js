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
        <p><strong>${basket[i].name}</strong></p>
        <img onclick="deleteDishes(${i})" class="trash" src="./assets/img/trash.png" alt="" />
      </div>
      <p><strong>Preis: ${formatPrice(basket[i].price)}</strong></p>
      <div class="number-buttons-position">
        <p><strong>Anzahl:</strong></p>
        <div>
          <img onclick="addDishes(${basket[i]})" class="plus-minus" src="./assets/img/plus.png" alt="" />
          <img onclick="removeDishes(${basket[i]})" class="plus-minus" src="./assets/img/minus.png" alt="" />
        </div>
      </div>
    </div>
    <div class="border-basket"></div>`
}