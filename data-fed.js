import mongoose from 'mongoose';
// Assuming the product model is defined in a separate file
const productSchema = new mongoose.Schema({
  id: String,
  class: String,
    img: String,
    name: String,
    price: String,
    div: String,
    star: Number,
    offpercent: String,
    instock: String,
    description: String,
    detaildescription: String,
  });
  const Product = mongoose.model('Product', productSchema);
  
mongoose.connect('mongodb://localhost:27017/harvestly', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    const productsData = [    {
      id: '658d6fac3692f6c4c9e153c0',
      class: 'product-4x',
      img: '/image26@2x.png',
      name: 'Green Apple',
      price: '₹14.99',
      div: '₹48.00',
      star:4,
      offpercent: '64% Off',
      instock: 'In Stock',
      description:'Experience the crisp sweetness of nature with our handpicked, premium-grade Green Apples. Renowned for their delightful taste and refreshing crunch, these apples are sourced from the finest orchards, ensuring exceptional quality and freshness.',
      detaildescription:'Green Apples are a food item that replenish 50 points of health in Legends of Equestria. They can be purchased from Sales Pitch in the Crystal Kingdom, Micro Transaction in Cantermore, or Granny Grey in Ponydale. The Granny Smith, also known as a green apple or sour apple, is an apple cultivar that originated in Australia in 1868. It is thought to be a hybrid of Malus sylvestris, the European wild apple, with the domesticated apple Malus domestica as the polleniser. The US Apple Association reported in 2019 that the Granny Smith was the third most popular apple in the United States of America. Mrs. Green Apple is a three-member Japanese rock band known for performing the fourth ending theme to the anime series Yu-Gi-Oh!. Green Apple Books & Music is an independent bookstore in the Richmond District of San Francisco, California. The store houses over 250,000 titles, as well as 60,000 available online. Fanta Green Apple is a more sour version of Fanta Apple, available online and at select stores in the United States'
    },
    { id: '658d6fac3692f6c4c9e153c1',
      class: 'product-4x1',
      img: '/image27@2x.png',
      name: 'Chanise Cabbage',
      price: '₹14.99',
      div: '₹48.00',
      star:4,
      offpercent: '64% Off',
      instock: 'In Stock',
      description:'Indulge in the delightful flavors and incredible freshness of our Chanise Cabbage. Handpicked and cultivated with utmost care, this cabbage variety is a culinary marvel, known for its crisp texture and mild, slightly sweet taste.',
      detaildescription:'Chinese cabbage refers to two cultivar groups of leaf vegetables commonly used in Chinese cuisine: the Pekinensis Group (napa cabbage) and the Chinensis Group (bok choy). Both are related to the Western cabbage and are of the same species as the common turnip. Napa cabbage is widely grown in eastern Asia and is commonly used to make kimchi, a traditional Korean dish made of spicy fermented vegetables. It is also known as dàbáicài in Mandarin Chinese and Chihili or Michihili in Japanese'

    },
    { id: '658d6fac3692f6c4c9e153c2',
      class: 'product-4x2',
      img: '/image28@2x.png',
      name: 'Green Capsicum',
      price: '₹14.99',
      div: '₹48.00',
      star:4,
      offpercent: '64% Off',
      instock: 'In Stock',
      description:'Discover the vibrant and crisp essence of our Green Capsicum, a staple in kitchens worldwide. Known for its vivid color, satisfying crunch, and distinctive sweet yet slightly tangy flavor, our premium-grade Green Capsicum adds a burst of freshness to every meal.',
      detaildescription:'Green Capsicum is a cultivar of the species Capsicum annuum that produces bell-shaped fruits in different colors, including red, yellow, orange, green, white, chocolate, candy cane striped, and purple. It is commonly referred to as a "pepper" or "capsicum" depending on its color. Bell peppers are sometimes grouped with less pungent pepper varieties of Capsicum annuum known as "sweet peppers." The jalapeo is a medium-sized chili pepper that is commonly picked and consumed while still green, but occasionally it is allowed to fully ripen and turn crimson red. Capsicum is a genus of plants from the nightshade family that is used as spices, vegetables, and medicines.'
    },
    { id: '658d6fac3692f6c4c9e153c3',
      class: 'product-4x3',
      img: '/image3@2x.png',
      name: 'Green Littuce',
      price: '₹14.99',
      div: '₹48.00',
      star:4,
      offpercent: '64% Off',
      instock: 'In Stock',
      description:'Indulge in the exceptional freshness and delicate crunch of our Green Lettuce, a staple in salads and a versatile ingredient in various culinary creations. Sourced from trusted farms committed to quality, our lettuce offers a delightful taste and crisp texture, perfect for elevating your meals.',
      detaildescription:'Romaine lettuce is a type of lettuce that grows in a tall head of sturdy dark green leaves with firm ribs down their centers. It is commonly used in Caesar salad and is commonly used in Middle Eastern cuisine. Romaine lettuce is tolerant of heat and is often sold as whole heads or as "hearts" that have had the outer leaves removed and are often packaged together in North America. Red leaf lettuces are a group of lettuce cultivars with red leaves, including "Lollo Rossa", "New Red Fire Lettuce", "Red Sails Lettuce", "Redina Lettuce", "Henrys Leafy Friend", Galactic Lettuce, and the "Benito Lettuce". Sea lettuce is a group of edible green algae that is widely distributed along the coasts of the worlds oceans. It is eaten by a number of different sea animals, including manatees and the sea slugs known as sea hares. Many species of sea lettuce are a food source for humans in Scandinavia, Great Britain, Ireland, China, and Japan.'
    },{id: '658d6fac3692f6c4c9e153c4',
      class:'product-4x',
      img:'/image@2x.png',
      name:'Big Potatos',
      price:'₹14.99',
      div:'₹20.99',
      star:4,
      offpercent: '64% Off',
      instock: 'In Stock',
      description:'Potatoes, known for their versatility and rich taste, are a staple in various cuisines worldwide. These fresh, high-quality potatoes are harvested at their prime to ensure the best flavor and texture. Whether mashed, roasted, fried, or used in stews and soups, these Potatoes are an essential ingredient for countless recipes. Their earthy flavor and fluffy texture make them an excellent addition to any meal.',
      detaildescription:'Potatoes are a starchy root vegetable native to the Americas that are consumed as a staple food in many parts of the world. They are tubers of the plant Solanum tuberosum, a perennial in the nightshade family Solanaceae. Potato cultivation in South America may go back 10,000 years, but tubers do not preserve well in the archaeological record, making identification difficult. The potato is the worlds fourth-largest food crop, following rice, wheat, and corn. The annual diet of an average global citizen in the first decade of the 21st century included about 33 kg (73 lb) of potato.'
   
    },
    
    {id: '658d6fac3692f6c4c9e153c5',
    class:'product-4x1',
    img:'/image1@2x.png',
    name:'Eggplant',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Eggplant, also known as aubergine, is a versatile and nutritious vegetable cherished in various cuisines globally. These fresh Eggplants are carefully selected for their vibrant color, firmness, and exceptional taste. With a mild, slightly earthy flavor and a unique texture, Eggplants are a culinary marvel. Their ability to absorb flavors makes them ideal for creating a wide range of delectable dishes.',
    detaildescription:'Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition. As a member of the genus Solanum, it is related to the tomato, chili pepper, and potato, although those are of the New World while the eggplant is of the Old World. Like the tomato, its skin and seeds can be eaten, but, like the potato, it is usually eaten cooked. Eggplant is nutritionally low in macronutrient and micronutrient content, but the capability of the fruit to absorb oils and flavors into its flesh through cooking expands its use in the culinary arts.'
    
    },
   
   
    {id: '658d6fac3692f6c4c9e153c6',
    class: 'product-4x2',
    img:'/image4@2x.png',
    name:'Corn',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Freshly picked and bursting with natural sweetness, our Corn promises a delightful taste of summer in every bite. Sourced from the finest fields, these tender, golden ears of Corn are handpicked at the peak of ripeness to ensure exceptional quality. Known for their vibrant kernels and juicy texture, Corn is a versatile staple that adds flavor and nutrition to various dishes.',
    detaildescription:'Corn, also known as maize, is a yellow, large-grained cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant gives rise to inflorescences that produce pollen and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are botanical fruits. Corn can also refer to the main cereal crop of a country or region. Corn on the cob is a culinary term for a cooked ear of sweet corn eaten directly off the cob. Ears of corn are steamed, boiled, or grilled usually without their green husks, or roasted with them. Flint corn, also known as Indian corn or sometimes calico corn, is a variant of maize with a hard outer layer to protect the soft endosperm. The six major types of corn are dent corn, flint corn, pod corn, popcorn, flour corn, and sweet corn.'
    },
    
    {id: '658d6fac3692f6c4c9e153c7',
    class: 'product-4x3',
    img:'/image29@2x.png',
    name:'Ladies Finger',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Discover the culinary versatility of our fresh and vibrant Ladies Finger, also known as Okra. Sourced from trusted farms, these slender green pods are handpicked to ensure the highest quality and flavor. With a mild taste and tender texture, Ladies Finger is a beloved ingredient in various global cuisines, prized for its nutritional value and culinary adaptability.',
    detaildescription:'Ladyfingers, or in British English sponge fingers (sometimes known by the Italian name savoiardi [savoˈjardi] or by the French name boudoirs [budwaʁ]), are low-density, dry, egg-based, sweet sponge cake biscuits roughly shaped like large fingers. They are a principal ingredient in many dessert recipes, such as trifles and charlottes, and are also used as fruit or chocolate gateau linings, and for the sponge element of tiramisu. They are typically soaked in a sugar syrup or liqueur, or in coffee or espresso for tiramisu. Plain ladyfingers are commonly given to infants, being soft enough for teething mouths, but easy to grasp and firm enough not to fall apart.'
    },
    
    {id: '658d6fac3692f6c4c9e153c8',
    class: 'product-4x4',
    img:'/image7@2x.png',
    name:'Green Cucumber',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Indulge in the crisp, refreshing taste of our Green Cucumbers, a quintessential addition to any kitchen. Handpicked at the peak of freshness, these vibrant cucumbers boast a delightful crunch and a mild, cool flavor, making them a versatile ingredient for a wide array of culinary creations.',
    detaildescription:'Cucumber (Cucumis sativus) is a widely-cultivated creeping vine plant in the family Cucurbitaceae that bears cylindrical to spherical fruits, which are used as culinary vegetables. Considered an annual plant, there are three main types of cucumber—slicing, pickling, and seedless—within which several cultivars have been created. The cucumber originates in Asia extending from India, Nepal, Bangladesh, China (Yunnan, Guizhou, Guangxi), and Northern Thailand, but now grows on most continents, and many different types of cucumber are grown commercially and traded on the global market. In North America, the term wild cucumber refers to plants in the genera Echinocystis and Marah, though the two are not closely related.'
    },
    {id: '658d6fac3692f6c4c9e153c9',
    class: 'product-4x5',
    img:'/image8@2x.png',
    name:'Red Capsicum',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Elevate your dishes with the vibrant and flavorful Red Capsicum, a versatile ingredient that brings a delightful burst of color and taste to your culinary creations. Handpicked at the peak of ripeness, our Red Capsicums offer a sweet and mildly tangy flavor, perfect for both raw and cooked dishes.',
    detaildescription:'Capsicum fruits of several varieties with commercial value are called by various European-language names in English, such as jalapeño, peperoncini, and peperoncino; many of these are usually sold pickled. Paprika (in English) refers to a powdered spice made of dried Capsicum of several sorts, though in Hungary, Germany, Sweden, Finland and some other countries it is the name of the fruit (or the vegetable) as well, for example Paprika in Dutch means bell pepper. Both whole and powdered chili are frequent ingredients in dishes prepared throughout the world, and characteristic of several cuisine styles, including Mexican, Sichuan (Szechuan) Chinese, Korean, Cajun and Creole, along with most South Asian and derived (e.g. Jamaican) curries. The powdered form is a key ingredient in various commercially prepared foodstuffs, such as pepperoni (a sausage), chili con carne (a meat stew), and hot sauces.'
    },
    {id: '658d6fac3692f6c4c9e153c10',
    class: 'product-4x6',
    img:'/image9@2x.png',
    name:'Fresh Cauliflower',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Discover the crisp and delightful taste of our Fresh Cauliflower, a versatile vegetable known for its mild flavor and incredible culinary adaptability. Handpicked at the peak of freshness, our cauliflowers boast a pristine white hue, firm florets, and a tender texture, ensuring a delightful addition to your meals.',
    detaildescription:'Cauliflower is a cruciferous vegetable belonging to the Brassicaceae family, which includes broccoli, Brussels sprouts, and cabbage. It is an annual plant that reproduces by seed. Typically, only the head of aborted floral meristems is eaten, while the stalk and surrounding green leaves are used in vegetable broth or discarded. The edible white flesh is sometimes called "curd" and has a similar appearance to cheese curd.'
    },
    {id: '658d6fac3692f6c4c9e153c11',
    class: 'product-4x7',
    img:'/image10@2x.png',
    name:'Green Chillies',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Add a zesty kick to your dishes with our vibrant and flavorful Green Chillies. These fresh, vibrant peppers are known for their distinctive heat and bright color, elevating the taste of your culinary creations. Handpicked for optimal freshness, our green chillies deliver both spice and freshness in every bite.',
    detaildescription:'Green chillies are an essential part of Indian food items. Apart from being mostly used raw to spice up your chaats, chutney and savoury snacks, green chillies are also used in many curries as paste or tempering.'
    },
    {id: '658d6fac3692f6c4c9e153c12',
    class: 'product-4x8',
    img:'/image12@2x.png',
    name:'Red Chillies',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Our vibrant and fiery Red Chillies bring a bold punch of flavor to your dishes. These hand-selected, fiery red peppers are known for their intense heat and deep, earthy notes, enhancing the taste and vibrancy of your culinary creations. Packed with both heat and flavor, these chillies are a must-have for spice lovers and culinary enthusiasts.',
    detaildescription:'Red chillies are an essential part of Indian food items. Apart from being mostly used raw to spice up your chaats, chutney and savoury snacks, red chillies are also used in many curries as paste or tempering.'
    },
    {id: '658d6fac3692f6c4c9e153c13',
    class: 'product-4x9',
    img:'/image13@2x.png',
    name:'Tomatto',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Fresh, juicy, and bursting with flavor, our premium Tomatoes are a kitchen staple for any culinary enthusiast. Handpicked at the peak of ripeness, these tomatoes offer a delightful combination of tangy sweetness and vibrant acidity, perfect for elevating your dishes to gourmet levels.',
    detaildescription:'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America. The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.'
    },
    {id: '658d6fac3692f6c4c9e153c14',
    class: 'product-4x10',
    img:'/image14@2x.png',
    name:'Mango',
    price:'₹14.99',
    div:'₹20.99',
    star:4,
    offpercent: '64% Off',
    instock: 'In Stock',
    description:'Indulge in the succulent sweetness of our premium Mangoes, natures gift to tantalize your taste buds. Sourced from the finest orchards, these tropical delights embody a perfect balance of rich, juicy flesh and an unmistakable aroma. Each bite promises a burst of sunshine and tropical paradise.',
    detaildescription:'Mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated in southern Asia, particularly in eastern India, Bangladesh, and the Andaman Islands. There are two types of modern mango cultivars: the "Indian type" and the "Southeast Asian type". The mango is an irregular, egg-shaped fruit that is a fleshy drupe, typically 8-12 centimeters long and greenish yellow in color. The fruits can be round, oval, heart, or kidney shaped. The mango tree grows between 10 and 30 meters tall with a rounded crown and has strong roots. The leaves are long, oval-shaped with pointed tips and have an intense red color when they are young, turning dark green as they mature. The mango is native to South Asia and has been distributed worldwide to become one of the most cultivated fruits in the tropics.'
    },
     ];

    Product.insertMany(productsData)
      .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
