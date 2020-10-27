import React, { useEffect, useState } from 'react'
import CardHeader from '../components/card/CardHeader'
import Card from '../components/card/Card'
import Spacer from '../components/Spacer'
import ProductCard from '../components/ProductCard'
import Customer from '../Customer'
import Button from '../components/Button'
import InfoCard from '../components/InfoCard'
import coinSound from '../assets/sounds/coin.wav'
import errorSound from '../assets/sounds/meepmerp.wav'
import SelectedProduct from '../SelectedProduct'
import { useHistory } from 'react-router'

const Dashboard = () => {
  const [message, setMessage] = useState('')
  const [product, setProduct] = useState('')
  const [customer, setCustomer] = useState({ name: '', transactionInfo: { today: 0, total: 0 } })
  const [lastPurchase, setLastPurchase] = useState('')
  const history = useHistory()

  const coin = new Audio(coinSound)
  const error = new Audio(errorSound)

  const addOne = () => {
    if (typeof product === 'undefined' || typeof product.name === 'undefined') {
      setMessage('Selecteer een product 😉')
      error.play().then()
    } else {
      createTransaction().then(setMessage(`1 ${product.name} gekocht! 🧃`))
      coin.play().then()
    }
    setTimeout(() => setMessage(''), 5000)
  }

  const createTransaction = () =>
    fetch(process.env.REACT_APP_API + 'transactions', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text-plain, */*',
        'X-Requested-With': 'XMLHttpRequest',
      },
      method: 'post',
      body: JSON.stringify({
        customer: customer.id,
        product: product.id,
      }),
    }).then((result) => setLastPurchase(result))

  const signout = () => {
    Customer.delId()
    history.push('/login')
  }

  const minimumIncome = () => {
    if (customer.balance < 0)
      return Math.abs(customer.balance) + 10
    return 10
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'products/' + SelectedProduct.get())
      .then((result) => {
        if (result.ok) return result.json()
        else SelectedProduct.pop()
      })
      .then((result) => setProduct(result))
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'customers/' + Customer.getId())
      .then((result) => result.json())
      .then((result) => setCustomer(result))
  }, [lastPurchase])

  return (
    <Card transparent>
      <CardHeader round message={message} onMessageClose={() => setMessage('')}>
        Hallo, {customer.name}
      </CardHeader>
      <div className="column">
        <div onClick={() => history.push('/products')}>
          {SelectedProduct.get() ? (
            <ProductCard {...product} />
          ) : (
            <InfoCard first="Er is nog geen product geselecteerd" second="Selecteer een product"/>
          )}
        </div>
        <div className="row">
          <a
            className="block"
            href={`https://bunq.me/stampot/${minimumIncome()}/Opwaarderen voor ${customer.name}`}
            target="_blank"
          >
            <InfoCard first="Saldo" second={'€ ' + (customer.balance?.toFixed(2) || 0)} third="Opwarderen"/>
          </a>
          <Button style={{ height: '75px' }} onClick={addOne}>
            +1
          </Button>
        </div>
        <div className="row">
          <div className="block" onClick={() => history.push('/log/' + customer.id)}>
            <InfoCard first="Vandaag" second={customer.transactionInfo.today} third="Gedronken"/>
          </div>
          <div className="block" onClick={() => history.push('/log')}>
            <InfoCard first="Totaal" second={customer.transactionInfo.total} third="Gedronken"/>
          </div>
        </div>
        <Spacer/>
        <Button block onClick={signout}>
          Uitloggen
        </Button>
      </div>
    </Card>
  )
}

export default Dashboard
