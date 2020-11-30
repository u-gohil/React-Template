import React, { useContext, useEffect } from 'react'
import { Context } from '../store/Store'
import './Page.css'

const Page = () => {
  const [state, dispatch] = useContext(Context)
  const currentUsername = 'TESTNAME'

  useEffect(() => {
    dispatch({ type: 'UPDATE_NAME', currentUsername })
  })

  console.log(currentUsername)
  return <h1>test</h1>
}

export default Page
