const matchReducer = (actionTypeReducerTuples, options = {}) => (
  state = options.initialState,
  action
) => {
  for (const actionType in actionTypeReducerTuples) {
    if (actionType === action.type) {
      return Object.assign(
        {},
        state,
        actionTypeReducerTuples[actionType](
          state,
          options.passOnlyPayload ? action.payload : action
        )
      )
    }
  }
  return state
}
module.exports = matchReducer
