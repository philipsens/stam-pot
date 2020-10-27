import React from 'react'
import Card from './card/Card'

const ProductCard = (product) => {
  return (
    <Card>
      <div className="product-card__container">
        <div className="product-card__image" style={{ backgroundImage: `URL(${process.env.REACT_APP_STORAGE + product.id}.png)` }} />
        <span className="product-card__description">{product.description}</span>
        <span className="product-card__name">{product.name}</span>
        <span className="product-card__price">€ {product.price?.toFixed(2)}</span>
      </div>
    </Card>
  )
}

export default ProductCard
