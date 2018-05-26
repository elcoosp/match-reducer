const makeActionsAndReducer = require('../src/makeActionsAndReducer')

test('should return a reducer and actionCreators (camelCased) for each key passed', () => {
  const initialState = { counter: 0 }
  const { reducer, actionCreators } = makeActionsAndReducer({
    INC_TWO: (state, { payload }) => ({
      counter: state.counter + payload
    }),
    DEC_TWO_DUMB: (state, { payload }) => ({
      counter: state.counter - payload
    })
  })

  expect(reducer(initialState, actionCreators.incTwo(2))).toEqual({
    counter: 2
  })

  expect(reducer(initialState, actionCreators.decTwoDumb(2))).toEqual({
    counter: -2
  })
})
