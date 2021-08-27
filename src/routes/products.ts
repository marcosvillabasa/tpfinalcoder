import { Router } from 'express'
import { productController } from '../controllers/products'
import {checkAdmin} from '../middleware/isAdmin'
const router = Router()

router.get('/', productController.getProducts)
router.get('/:id', productController.getProducts)
router.post('/', checkAdmin, productController.addProduct)
router.put('/:id', checkAdmin, productController.updateProduct)
router.delete('/:id', checkAdmin, productController.deleteProduct)

export default router
