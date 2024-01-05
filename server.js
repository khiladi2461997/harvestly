import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

import dbConnect from './config/dbConnect.js';
import home from "./routes/home.js";
import api from "./routes/api.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//import vegetableRoutes from './routes/products.js';
//import featuredProductsRoutes from './routes/featuredproducts.js';
//import * as serviceAccount from 'file:///C:/Users/SHREY/Desktop/pesto-project/back-end-repo-code-crafters/firebase/serviceAccountKey.json' assert { type: 'json' };

/*
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Add other configurations if needed
});
*/
// MongoDB connection
dbConnect();

const app = express();

// Body parser middleware
app.use(express.json());

// MongoDB Schema and Model
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

const UserSchema = new mongoose.Schema({
  userId: String, // Add this field for the user ID
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

const CartItemSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  quantity: Number,
  // Add other necessary fields here
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

const LoggedInUserSchema = new mongoose.Schema({
  userId: String,
  loggedInAt: {
    type: Date,
    default: Date.now,
  },
});

const LoggedInUser = mongoose.model('LoggedInUser', LoggedInUserSchema);



// CORS middleware
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);


// Routes
app.use("/home", home);
app.use("/api", api);
//app.use('/api', vegetableRoutes);
//app.use('/api', featuredProductsRoutes);

// Fetch all products
/*app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});*/
// Fetch products with search functionality
app.get('/api/products', async (req, res) => {
  try {
    const { search } = req.query;
    let products;

    if (search) {
      // Perform a case-insensitive search using a regular expression
      const regex = new RegExp(search, 'i');
      products = await Product.find({ name: regex }); // Search in the 'name' field; adjust as needed
    } else {
      products = await Product.find(); // Fetch all products if no search term is provided
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Add a new product
app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Modify the route to get a single product by ID
app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ id: id.toString() });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modify the route to get a single product by ID
// Endpoint to remove a product from the cart for a specific user
app.delete('/api/app/cart/:userId/:productId/remove', async (req, res) => {
  const { userId, productId } = req.params;

  try {
    // Find the cart item for the given userId and productId
    const cartItem = await CartItem.findOne({ userId, productId });

    if (!cartItem) {
      return res.status(404).json({ message: 'Product not found in the cart' });
    }

    // Remove the cart item
    await CartItem.deleteOne({ userId, productId });

    res.json({ message: 'Product removed from the cart' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Modify the route to get a single product by ID with userId
app.get('/api/products/:userId/:id', async (req, res) => {
  const { userId, id } = req.params;

  try {
    // Find the product based on productId and userId
    const product = await Product.findOne({ id: id.toString() });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Here you can use userId and productId to perform further actions if needed

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to get the quantity of a specific product for a user
app.get('/api/cart/:userId/:productId/quantity', async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const cartItem = await CartItem.findOne({ userId, productId });

    if (!cartItem) {
      return res.status(404).json({ message: 'Product not found in the cart' });
    }

    res.json({ quantity: cartItem.quantity });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Assuming you already have your route defined in Express

// Endpoint to get all products in the cart for a specific user
app.get('/api/app/cart/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Find all products in the cart for the given userId
    const cartItems = await CartItem.find({ userId }).populate('productId');

    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.put('/api/app/cart/:userId/:productId/quantity/add', async (req, res) => {
  const { userId, productId } = req.params;

  try {
    let cartItem = await CartItem.findOne({ userId, productId });

    if (!cartItem) {
      // If the product is not found, create a new cart item
      cartItem = new CartItem({
        userId,
        productId,
        quantity: 1 // Set the initial quantity to 1
        // Add other necessary fields if required
      });

      await cartItem.save();

      return res.status(201).json({ message: 'Product created in the cart', newQuantity: cartItem.quantity });
    }

    // If the product is found, increment the quantity
    cartItem.quantity += 1;
    await cartItem.save();

    res.json({ message: 'Quantity updated successfully', newQuantity: cartItem.quantity });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.put('/api/app/cart/:userId/:productId/quantity/sub', async (req, res) => {
  const { userId, productId } = req.params;

  try {
    // Your logic to find the cart item and increment quantity
    // This might involve querying the database to find the user's cart item by userId and productId, then incrementing its quantity by 1

    // Example:
    let cartItem = await CartItem.findOne({ userId, productId });

    if (!cartItem) {
      return res.status(404).json({ message: 'Product not found in the cart' });
    }

    cartItem.quantity -= 1;
    await cartItem.save();

    res.json({ message: 'Quantity updated successfully', newQuantity: cartItem.quantity });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ... (your existing code)

// Create an empty array to hold the cart items
let cartItems = [];


// Endpoint to add a product to the cart
// ... (your existing imports and code)

// Endpoint to add a product to the cart
app.post('/api/cart/add', async (req, res) => {
  const { productId, quantity, userId } = req.body;

  try {
    const existingCartItem = await CartItem.findOne({ userId, productId });

    if (existingCartItem) {
      // If the item exists for the user, update its quantity
      existingCartItem.quantity += quantity || 1;
      await existingCartItem.save();
      res.status(200).json({ message: 'Quantity updated in cart', cart: existingCartItem });
    } else {
      // If the item doesn't exist, create a new cart item
      const newCartItem = new CartItem({
        userId,
        productId,
        quantity: quantity || 1,
      });

      await newCartItem.save();
      res.status(201).json({ message: 'Product added to cart', cart: newCartItem });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ... (rest of your existing routes and code)


// Endpoint to get the current items in the cart
app.get('/api/cart', (req, res) => {
  res.json(cartItems);
});


// Endpoint to add a product to the cart



// ... (your existing code)

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.error('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.error('Invalid credentials');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email }, 'your_secret_key', {
      expiresIn: '1h', // Token expiration time
    });

    console.log('Login successfull'); // Log success
    const loggedInUser = new LoggedInUser({ userId: user.userId });
    await loggedInUser.save();
    res.status(200).json({ token });
  } catch (error) {
    console.error('Server error:', error); // Log error
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/logout', async (req, res) => {
  // Assuming you're sending the user's ID in the request body upon logout
  const { userId } = req.body;

  try {
    await LoggedInUser.deleteOne({ userId });
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error logging out:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/currentuser', async (req, res) => {
  try {
    const loggedInUsers = await LoggedInUser.find();
    res.status(200).json({ loggedInUsers });
  } catch (error) {
    console.error('Error fetching logged-in users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password, userId } = req.body; // Include userId in the request body

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, userId }); // Include userId in the new user creation
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/storeGoogleUserData', async (req, res) => {
  const { userId, displayName, email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    
    // Check if the user already exists
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = new User({
      userId,
      name: displayName,
      email,
      // Add other fields if necessary
    });

    await newUser.save();
    res.status(201).json({ message: 'User data stored successfully' });
  } catch (error) {
    console.error('Error storing user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Add this endpoint in your Express app

app.post('/api/storeGoogleUserData', async (req, res) => {
  const { displayName, email } = req.body;

  try {
    const newUser = new User({
      name: displayName,
      email: email,
      // Map other fields accordingly or leave them blank as per your schema
    });

    await newUser.save();
    res.status(201).json({ message: 'User data stored successfully' });
  } catch (error) {
    console.error('Error storing user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

/*
app.get('/api/auth/google', (req, res) => {
  const provider = new admin.auth.GoogleAuthProvider();

  // Redirect the user to Google sign-in
  admin
    .auth()
    .signInWithPopup(provider)
    .then((userCredential) => {
      // Successful authentication
      const { user } = userCredential;
      res.status(200).json({ user });
    })
    .catch((error) => {
      // Handle authentication errors
      console.error('Google authentication error:', error);
      res.status(500).json({ error: 'Google authentication failed' });
    });
});
*/

// Start the server
const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
