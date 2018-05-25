const matchReducer = require('../src/matchReducer')

test('should return the current state if no action type is provided or is matched', () => {
  const initialState = { counter: 0 }
  const reducer = matchReducer({
    INC: (state, { payload }) => ({
      counter: state.counter + payload
    })
  })

  expect(
    reducer(initialState, { type: 'WRONG_ACTION_TYPE', payload: null })
  ).toEqual(initialState)
})

test('should return a new state with updated value if the action type is matched', () => {
  const initialState = { counter: 0, something: 'else' }

  const reducer = matchReducer({
    INC: (state, { payload }) => ({
      counter: state.counter + payload
    }),
    DEC: (state, { payload }) => ({
      counter: state.counter - payload
    })
  })

  let newState1 = reducer(initialState, { type: 'INC', payload: 1 })
  let newState2 = reducer(newState1, { type: 'DEC', payload: 3 })

  expect(newState1).toEqual({
    counter: 1,
    something: 'else'
  })

  expect(newState2).toEqual({
    counter: -2,
    something: 'else'
  })
})

test('should pass the initialState provided in options to the returned reducer', () => {
  const initialState = { counter: 0, something: 'else' }

  const reducer = matchReducer(
    {
      INC: (state, { payload }) => ({
        counter: state.counter + payload
      }),
      DEC: (state, { payload }) => ({
        counter: state.counter - payload
      })
    },
    { initialState }
  )

  expect(reducer(undefined, { type: 'BLABLA', payload: 1 })).toEqual({
    counter: 0,
    something: 'else'
  })
})

test('should pass pass only the payload from the action (and not the whole  action) to the functions reducers if the option is set to true', () => {
  const initialState = { counter: 0, something: 'else' }

  const reducer = matchReducer(
    {
      INC: (state, payload) => ({
        counter: state.counter + payload
      }),
      DEC: (state, payload) => ({
        counter: state.counter - payload
      })
    },
    { initialState, passOnlyPayload: true }
  )

  expect(reducer(undefined, { type: 'INC', payload: 2 })).toEqual({
    counter: 2,
    something: 'else'
  })
})
