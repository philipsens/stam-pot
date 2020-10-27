import React from 'react'
import classnames from 'classnames'

const Card = ({ className, transparent, ...props }) => (
  <div className={classnames(className, 'card', transparent ? 'card--transparent' : '')} {...props} />
)

export default Card
