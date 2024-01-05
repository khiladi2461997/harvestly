import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const vegetablesData = [{
  class:'product-4x',
  img:'/image@2x.png',
  name:'Big Potatos',
  price:'₹14.99',
  div:'₹20.99',
  star:4
},

{
class:'product-4x1',
img:'/image1@2x.png',
name:'Eggplant',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x2',
img:'/image2@2x.png',
name:'Green Capsicum',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x3',
img:'/image3@2x.png',
name:'Green Littuce',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x4',
img:'/image4@2x.png',
name:'Corn',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x5',
img:'/image5@2x.png',
name:'Chanise Cabbage',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x6',
img:'/image29@2x.png',
name:'Ladies Finger',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x7',
img:'/image6@2x.png',
name:'Green Apple',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x8',
img:'/image7@2x.png',
name:'Green Cucumber',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x9',
img:'/image8@2x.png',
name:'Red Capsicum',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x10',
img:'/image9@2x.png',
name:'Fresh Cauliflower',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x11',
img:'/image10@2x.png',
name:'Green Chillies',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x12',
img:'/image12@2x.png',
name:'Red Chillies',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x13',
img:'/image13@2x.png',
name:'Tomatto',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x14',
img:'/image14@2x.png',
name:'Mango',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x15',
img:'/image14@2x.png',
name:'Hapoose Mango',
price:'₹14.99',
div:'₹20.99',
star:4
},];
// Add a unique id to each object in the vegetablesData array
vegetablesData.forEach((vegetable) => {
  vegetable.id = uuidv4();
});
router.get('/products', (req, res) => {
  res.json(vegetablesData);
});
router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = vegetablesData.find((vegetable) => vegetable.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});


export default router;