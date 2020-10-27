import React, { useEffect, useState } from 'react'
import CardHeader from '../components/card/CardHeader'
import Card from '../components/card/Card'
import ProductCard from '../components/ProductCard'
import SelectedProduct from '../SelectedProduct'
import { useHistory } from 'react-router'

const Products = () => {
  const [products, setProducts] = useState([])
  const history = useHistory()

  const selectProduct = (product) => {
    SelectedProduct.set(product.id)
    history.push('/')
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'products')
      .then((result) => result.json())
      .then((json) => {
        setProducts(json)
      })
  }, [])

  return (
    <Card transparent>
      <CardHeader round>Producten</CardHeader>
      <div className="column">
        {products.map((product) => (
          <div onClick={() => selectProduct(product)}>
            <ProductCard key={product.id} {...product} />
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Products
