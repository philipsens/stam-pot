import React from 'react'
import Card from './card/Card'

const InfoImageCard = (transaction) => {
  return (
    <Card>
      <div className="product-card__container">
        <div className="product-card__image" style={{ backgroundImage: `URL(${transaction.image})` }} />
        <span className="product-card__description">{transaction.first}</span>
        <span className="product-card__name">{transaction.second}</span>
        <span className="product-card__price">{transaction.third}</span>
      </div>
    </Card>
  )
}

export default InfoImageCard
