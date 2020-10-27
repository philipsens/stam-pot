import React, { useState } from 'react'
import classnames from 'classnames'

const Select2 = ({ onChange, className, placeholder, options = [], ...props }) => {
  const [dirty, setDirty] = useState(false)
  const onValueChange = (e) => {
    setDirty(e.currentTarget.value !== '')
    if (typeof onChange !== 'undefined') {
      onChange(e)
    }
  }
  return (
    <div className={classnames('input__wrapper', className)}>
      <select {...props} className={classnames('input', { dirty })} onChange={onValueChange}>
        <option value="" disabled>
          {placeholder ? placeholder : 'Selecteer een optie'}
        </option>
        {options.map((option, key) => (
          <option key={key}>{option}</option>
        ))}
      </select>
      <div className="input__underline" />
    </div>
  )
}

export default Select2
