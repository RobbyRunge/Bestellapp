let basket = [];

let myDishes = [
  {
    "id": 0,
    "headImage": "./assets/img/burger.jpg",
    "headline": "Burger",
    "name": "Big Hamburger",
    "price": 6.50,
    "description": "Ist ein großer, saftiger Burger, mit einem großzügigen Rindfleischpatty, knackigem Salat, Tomaten, Zwiebeln, Käse, Gurken und einer würzigen Sauce. Wird in einem fluffigen Brötchen serviert. Für alle die es klassisch lieben!"
  },

  {
    "id": 1,
    "name": "Big Cheeseburger",
    "price": 7.50,
    "description": "Ist ein herzhafter Klassiker der Fast-Food-Küche: saftiges Rindfleisch-Patty, geschmolzener Käse, knackiger Salat, Tomaten, Zwiebeln, Gurkenscheiben und eine pikante Sauce, serviert in einem weichen, goldbraunen Brötchen. Perfekt für Burger-Liebhaber!"
  },

  {
    "id": 2,
    "name": "Big Chilli Burger",
    "price": 7.50,
    "description": "Ist ein würziger Burger mit saftigem Rindfleisch-Patty, scharfem Chili-Topping, cremiger Jalapeño-Sauce, knackigem Salat und geschmolzenem Käse, serviert in einem getoasteten Bun. Perfekt für Liebhaber von feurigem Geschmack! "
  },

  {
    "id": 3,
    "name": "Big Chickenburger",
    "price": 7.50,
    "description": "Ist ein großzügiger Burger mit einem saftigen, panierten oder gegrillten Hähnchen-Patty, serviert in einem weichen Brötchen. Enthält Salat, Tomaten, Käse, Gurken, und eine spezielle Sauce, um den Geschmack abzurunden. Ideal für alle, die Hähnchen lieben und einen herzhaften Genuss suchen!"
  },
  
  {
    "id": 4,
    "headImage": "./assets/img/nudeln.png",
    "headline": "Nudeln",
    "name": "Nudeln mit Tomatensauce",
    "price": 8.50,
    "description": "Nudeln mit Tomatensauce: Ein klassisches Gericht aus al dente gekochten Nudeln und einer würzigen, leicht süßlichen Tomatensauce. Perfekt abgerundet mit frischen Kräutern und Parmesan."
  },

  {
    "id": 5,
    "name": "Nudeln mit Hackfleischsauce",
    "price": 9.00,
    "description": "Saftige Hackfleischsauce, gewürzt mit Tomaten, Kräutern und Zwiebeln, serviert über al dente gekochten Nudeln – ein klassisches, herzhaftes Gericht."
  },

  {
    "id": 6,
    "name": "Spaghetti Carbonara",
    "price": 11.00,
    "description": "Ein klassisches italienisches Gericht aus Spaghetti, Eigelb, Parmesan, Pancetta und Pfeffer. Die cremige Sauce entsteht allein durch die Kombination der Zutaten, ohne Sahne und unglaublich lecker!"
  },

  {
    "id": 7,
    "name": "Spaghetti Bolognese",
    "price": 11.00,
    "description": "Ein großer, saftiger Burger, der aus einem dicken Rindfleischpatty, frischem Salat, Tomaten, Gurken, Käse und Zwiebeln besteht, eingerahmt von einem weichen Brötchen. Mit Saucen Ketchup, Mayo und einer speziellen Burger-Soße verfeinert."
  },

  {
    "id": 8,
    "headImage": "./assets/img/aufläufe.jpg",
    "headline": "Aufläufe",
    "name": "Broccoli-Auflauf",
    "price": 11.00,
    "description": "Nudeln mit würziger Sahnesauce und Brokkolie, mit Käse überbacken."
  },

  {
    "id": 9,
    "name": "Nudel-Auflauf",
    "price": 11.00,
    "description": "Ein cremiger Auflauf aus Nudeln, Gemüse und Käse, im Ofen goldbraun überbacken – einfach und köstlich!"
  },

  {
    "id": 10,
    "name": "Gemüse-Auflauf",
    "price": 11.00,
    "description": "Ein Gemüse-Auflauf ist ein herzhaftes Gericht, bei dem frisches oder tiefgekühltes Gemüse mit einer cremigen Sauce und Käse überbacken wird. Perfekt als gesunde Hauptspeise oder Beilage!"
  },

  {
    "id": 11,
    "name": "Überbackene Nudeln mit Tomatensauce",
    "price": 11.00,
    "description": "Nudeln in würziger Tomatensauce, mit Käse überbacken. Perfekt cremig und herzhaft!"
  },

  {
    "id": 12,
    "headImage": "./assets/img/dessert.jpg",
    "headline": "Desserts",
    "name": "Tiramisu",
    "price": 9.50,
    "description": "Ist ein klassisches italienisches Dessert aus Löffelbiskuits, Mascarponecreme, Kaffee und Kakaopulver, mit Amaretto verfeinert."
  },

  {
    "id": 13,
    "name": "Schoko Lavakuchen",
    "price": 8.50,
    "description": "Ein kleiner, weicher Kuchen mit einer flüssigen Schokoladenfüllung im Inneren, der beim Anschneiden herausfließt. Perfekt für Schokofans!"
  },

  {
    "id": 14,
    "name": "Creme Brule",
    "price": 8.50,
    "description": "Ein französisches Dessert aus einer vanillearomatisierten Eier-Sahne-Creme, die mit einer knusprigen Karamellschicht überzogen wird."
  },

  {
    "id": 15,
    "name": "Schokobrötchen (5 Stück)",
    "price": 8.50,
    "description": "Gefüllt mit Kinderschokolade, dazu Vanille-Dip"
  }
];

