function getTemplateDishes(indexDishes) {
  return `

          <div class="dishes-container pd-16">
            <h3 id="dishesName">${myDishes[indexDishes].name}</h3>
            <p id="dishesDescription" class="pd-top-bottom-8">
              ${myDishes[indexDishes].description}
            </p>
            <p id="dishesPrice" class="price-style">${myDishes[indexDishes].price} €</p>
            <div class="plus-position">
              <img class="plus-style" src="./assets/img/plus.png" alt="" />
            </div>
          </div>
          <br>`
}

function getTemplateDishesHeadline(indexDishes) {
  return `
  <div class="pd-left-32">
    <h2 id="burger" class="pd-16">${myDishes[indexDishes].headline}</h2>
  </div>`
}