const matchReducer = require('../src/matchReducer')
const { camelCase } = require('change-case')
const makeActionsAndReducer = (actionTypeReducerTuples, options = {}) => ({
  actionCreators: Object.keys(actionTypeReducerTuples).reduce((acc, type) => {
    acc[camelCase(type)] = payload => ({
      type,
      payload
    })
    return acc
  }, {}),
  reducer: matchReducer(actionTypeReducerTuples, options)
})

module.exports = makeActionsAndReducer
