export default (state = {}, action) => {
  switch (action.type) {
    case 'EXAMPLE_INFO':
      return {
        exampleData: action.payload,
      }
    default:
      return state
  }
}
