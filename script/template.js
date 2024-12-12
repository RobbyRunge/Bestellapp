function getTemplateDishes(indexDishes) {
  return `
          <div class="dishes-container pd-16 border-shadow">
            <h3 id="dishesName">${myDishes[indexDishes].name}</h3>
            <p id="dishesDescription" class="pd-top-bottom-8">
              ${myDishes[indexDishes].description}
            </p>
            <p id="dishesPrice" class="price-style">${myDishes[indexDishes].price} €</p>
          </div>
          <br>`
}

function getTemplateHeadline(indexDishes) {
  return `
    <div>
      <h2 class="pd-16">${myDishes[indexDishes].headline}</h2>
    </div>`
}

function getTemplateHeadlineImg(indexDishes) {
  return `
    <div>
      <img class="image-headline border-shadow" src="${myDishes[indexDishes].headImage}" alt="" />
    </div>`
}