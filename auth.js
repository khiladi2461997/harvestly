import express from 'express'
const router = express.Router();
import passport from 'passport';

const authController = require('../controllers/authController');

const auth = require('../middleware/auth');

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/user', auth, authController.get_user);

export default router;          