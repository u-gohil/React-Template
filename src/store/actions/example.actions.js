import { EXAMPLE_INFO } from '../types'

export const exampleData = (payload) => {
  return {
    type: EXAMPLE_INFO,
    payload,
  }
}
