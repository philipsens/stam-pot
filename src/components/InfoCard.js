import React from 'react'
import Card from './card/Card'

const ProductCard = ({ first, second, third }) => {
  return (
    <Card className="small-card block">
      <div className="info-card__container">
        <span className="info-card__first">{first}</span>
        <span className="info-card__second">{second}</span>
        <span className="info-card__third">{third}</span>
      </div>
    </Card>
  )
}

export default ProductCard
