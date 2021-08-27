import { Request, Response } from 'express'
let products: any = []

class Product {
  getProducts(req: Request, res: Response) {
    const { id } = req.params
    if (id) {
      const prod = products.find((p: any) => p.id === Number(id))
      if (!prod) {
        return res.status(404).json({
          msg: 'Product not found'
        })
      }
      return res.json({
        data: prod
      })
    }
    res.json({ data: products })
  }

  addProduct(req: Request, res: Response) {
    const { name, description, code, price, stock } = req.body

    if (!name || !price || !description || !code || !stock) {
      return res.status(400).json({
        msg: 'Invalid fields'
      })
    }

    const prodItem = {
      id: products.length + 1,
      name,
      price: Number(price),
      description,
      code: Number(code),
      stock: Number(stock)
    }
    products.push(prodItem)
    return res.json({
      msg: 'Product was created',
      data: prodItem
    })
  }

  updateProduct(req: Request, res: Response) {
    const id = Number(req.params.id)
    const prod = products.find((p: { id: number }) => p.id === id)
    if(!prod) {
       return res.status(404).json({
         msg: "Product not found"
       })
    }
    prod.name = req.body.name || prod.name
    prod.price =  req.body.price || prod.price 
    prod.description = req.body.description || prod.description
    prod.code = req.body.code || prod.code 
    prod.stock = req.body.stock || prod.stock

    return res.json({
      msg: "Product updated",
      data: prod
    })
  }

  deleteProduct(req: Request, res: Response) {
    const id = Number(req.params.id)
    const prod = products.find((p: { id: number }) => p.id === id)
    if(!prod) {
       return res.status(404).json({
         msg: "Product not found"
       })
    }
    products = products.filter((p: { id: number }) => p.id !== id)
    return res.json({
      msg: "Product delete",
    })
  }
}

export const productController = new Product()
