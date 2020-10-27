import React from 'react'
import CardHeaderMessage from './CardHeaderMessage'
import * as classnames from 'classnames'

const CardHeader = ({ message, round, onMessageClose, ...props }) => (
  <>
    <CardHeaderMessage message={message} onClose={onMessageClose} />
    <div className={classnames(round ? 'header-wrapper--round' : '', 'header-wrapper')}>
      <div className={round ? 'header--round' : 'header'} {...props} />
    </div>
    <div className={'triangle'} />
  </>
)

export default CardHeader
