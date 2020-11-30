import React, { useContext, useEffect } from 'react'
import { Context } from '../store/Store'
import { useQuery, gql } from '@apollo/client'
import './Page.css'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "AUD") {
      currency
      rate
    }
    openExchangeRates
      @rest(
        type: "openExchangeRates"
        path: "/latest"
        endpoint: "openExchangeRate"
      ) {
      rates
    }
  }
`
const Page = () => {
  const [state, dispatch] = useContext(Context)
  const currentUsername = 'TESTNAME'

  useEffect(() => {
    dispatch({ type: 'UPDATE_NAME', currentUsername })
  })

  console.log(currentUsername)
  const { data, loading, error } = useQuery(EXCHANGE_RATES)

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
        test
      </p>
    </div>
  ))
}

export default Page
