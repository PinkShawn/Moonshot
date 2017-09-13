const balance = (state = [], action) => {
  switch (action.type) {
    case 'SET_BALANCE':
      return [
        ...state,
        {
          spendable: action.spendable,
          total: action.total
        }
      ]
    default:
      return state
  }
}

export default balance
