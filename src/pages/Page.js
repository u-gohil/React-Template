import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { exampleData } from '../store/actions/example.actions'
import './Page.css'

const Page = () => {
  const dispatch = useDispatch()

  const example = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(exampleData())
  }, [dispatch])

  return <h1>test</h1>
}

export default Page
