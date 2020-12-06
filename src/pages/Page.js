import React, { useContext, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useStore } from '../store'
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
 /* const [state, dispatch] = useContext(Context)
  const currentUsername = 'TESTNAME'

  useEffect(() => {
    dispatch({ type: 'UPDATE_NAME', currentUsername })
  })

  console.log(currentUsername)*/
  const { data, loading, error } = useQuery(EXCHANGE_RATES)

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  const {state, dispatch} = useStore();
  
  return data.rates.map(({ currency, rate }) => (
    <>
    <div key={currency}>
      <p>
        {currency}: {rate}
        test
      </p>
    </div>
    {state.count}
      <button onClick={() => dispatch({type: "increment", message:"Incremented"})}>+</button>
      <button onClick={() => dispatch({type: "decrement", message: "Decremented"})}>-</button>
      <button onClick={() => dispatch({type: "reset", message: "Reset"})}>Reset</button>
      {state.message}
    </>
  ))
}

export default Page
