function getTemplateDishes(indexDishes) {
  return `
          <div class="dishes-container pd-16 border-shadow">
            <div class="headline-add-position">
              <h3 id="dishesName">${myDishes[indexDishes].name}</h3>
              <img onclick="" src="./assets/img/plus.png" alt="">
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