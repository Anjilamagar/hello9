import express from 'express'
import Product from '../models/product.js'
import { createProduct, updateProduct, deleteProduct, deleteProductN, getAllProducts, getProductByName, getProductById } from '../controllers/productController.js'


const router = express.Router()

router.post('/createProduct', createProduct)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)
router.delete('/deleteProductN', deleteProductN)

router.get('/getAllProducts', getAllProducts)

router.get('/getProductById/:id', getProductById)
router.get('/getProductByName', getProductByName)




export default router