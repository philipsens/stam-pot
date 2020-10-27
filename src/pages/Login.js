import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../components/card/Card'
import CardHeader from '../components/card/CardHeader'
import CardBody from '../components/card/CardBody'
import CardButtons from '../components/card/CardButtons'
import Button from '../components/Button'
import Customer from '../Customer'
import Select from 'react-select'

const customStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    border: isFocused ? '#800080' : '#ffffff',
    boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
    backgroundColor: 'white',
  }),
  menu: (provided, state) => ({
    ...provided,
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#93a8ac' : isSelected ? '#08605f' : '#ffffff',
      color: isSelected ? '#ffffff' : '#000000',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: '#93a8ac',
      },
    }
  },
}

const Login = () => {
  const [customer, setCustomer] = useState('')
  const [customerValid, setCustomerValid] = useState(false)
  const [customers, setCustomers] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'customers')
      .then((result) => result.json())
      .then((json) => {
        setCustomers(json)
      })
  }, [])

  const handleChange = ({ value }) => {
    setCustomer(value)
    setCustomerValid(true)
  }

  const login = (e) => {
    e.preventDefault()
    Customer.setId(customer)
    history.push('/')
  }

  return (
    <Card>
      <CardHeader>Wie ben je?</CardHeader>
      <CardBody>
        <form onSubmit={login}>
          <Select
            onChange={handleChange}
            options={customers.map((customer) => ({ value: customer.id, label: customer.name }))}
            styles={customStyles}
          />
          <CardButtons>
            <Button block disabled={!customerValid}>
              Verder
            </Button>
          </CardButtons>
        </form>
      </CardBody>
    </Card>
  )
}

export default Login
