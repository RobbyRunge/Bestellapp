function getTemplateDishes(indexDishes) {
  return `
          <div class="dishes-container pd-16 border-shadow">
            <div class="headline-add-position">
              <h3 id="dishesName">${myDishes[indexDishes].name}</h3>
              <img onclick="addDishesToBasket(${indexDishes})" src="./assets/img/plus.png" alt="">
            </div>
            <p id="dishesDescription" class="pd-top-bottom-8">
              ${myDishes[indexDishes].description}
            </p>
            <p id="dishesPrice" class="price-style">${formatPrice(myDishes[indexDishes].price)}</p>
          </div>
          <br>`
}

function getTemplateHeadline(indexDishes) {
  return `
    <div>
      <h2  class="pd-16">${myDishes[indexDishes].headline}</h2>
    </div>`
}

function getTemplateHeadlineImg(indexDishes) {
  return `
    <div>
      <img id="headline-${myDishes[indexDishes].headImage}" class="image-content border-shadow" src="${myDishes[indexDishes].headImage}" alt="" />
    </div>`
}

function getTemplateBasket(indexDishes) {
  return `
    <div class="name-price-amount-position">
      <div class="number-buttons-position">
        <p><strong>${myDishes[indexDishes].name}</strong></p>
        <img onclick="deleteDishes()" class="plus-minus-trash" src="./assets/img/trash.png" alt="" />
      </div>
      <p><strong>Preis: ${formatPrice(myDishes[indexDishes].price)}</strong></p>
      <div class="number-buttons-position">
        <p><strong>Anzahl: 1</strong></p>
        <div>
          <img class="plus-minus-trash" src="./assets/img/plus.png" alt="" />
          <img class="plus-minus-trash" src="./assets/img/minus.png" alt="" />
        </div>
      </div>
    </div>
    <div class="border-basket"></div>`
}