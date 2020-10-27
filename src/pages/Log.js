import React, { useEffect, useState } from 'react'
import CardHeader from '../components/card/CardHeader'
import Card from '../components/card/Card'
import { useHistory, useParams } from 'react-router'
import InfoImageCard from '../components/InfoImageCard'

const Log = () => {
  const [transactions, setTransactions] = useState([])
  const { customer } = useParams()
  const history = useHistory()

  useEffect(() => {
    let transactionsUri
    if (customer) transactionsUri = 'transactions/' + customer
    else transactionsUri = 'transactions'
    fetch(process.env.REACT_APP_API + transactionsUri)
      .then((result) => result.json())
      .then((json) => {
        setTransactions(json)
      })
  }, [])

  return (
    <Card transparent>
      <CardHeader round>Activiteit</CardHeader>
      <div className="column">
        {transactions.map((transaction, index) => (
          <div>
            <InfoImageCard
              key={transaction.id}
              first={transaction.customer.name}
              second={transaction.product.name}
              third={transaction.date}
              image={process.env.REACT_APP_STORAGE + transaction.product.id + '.png'}
            />
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Log
