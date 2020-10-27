import React from 'react'
import { useHistory } from 'react-router'

const Header = () => {
  const history = useHistory()

  return (
    <header className="app-header">
      <div className="logo" onClick={() => history.push('/')}>
        <span className="stam">Stam!</span>
        <span className="pot">Pot</span>
      </div>
    </header>
  )
}

export default Header
