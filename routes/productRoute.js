import express from 'express'
import Product from '../models/product.js'
import { createProduct, updateProduct, deleteProduct, deleteProductN, getAllProducts, getProductByName, getProductById } from '../controllers/productController.js'
import { isLoggedIn } from '../middleware/isLogedIn.js'
import { isAdmin } from '../middleware/isAdmin.js'
import { upload } from '../config/Cloudinary.js'


const router = express.Router()

router.post('/createProduct', upload.single('image'), createProduct)
// router.put('/updateProduct/:id', isLoggedIn, isAdmin, updateProduct)
router.put('/updateProduct/:id', upload.single('image'), updateProduct)
router.delete('/deleteProduct/:id', isLoggedIn, isAdmin, deleteProduct)
router.delete('/deleteProductN', isLoggedIn, isAdmin, deleteProductN)

router.get('/getAllProducts', getAllProducts)

router.get('/getProductById/:id', getProductById)
router.get('/getProductByName', getProductByName)




export default router