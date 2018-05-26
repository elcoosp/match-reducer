<p align="center">
  <img src="https://i.imgur.com/q0NXTTk.png"/>
</p>

# Match-reducer

[![Build Status](https://travis-ci.org/elcoosp/match-reducer.png?branch=master)](https://travis-ci.org/elcoosp/match-reducer)
[![Node version](https://img.shields.io/node/v/match-reducer.svg?style=flat)](http://nodejs.org/download/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Known Vulnerabilities](https://snyk.io/test/github/elcoosp/match-reducer/badge.svg)](https://snyk.io/test/github/elcoosp/match-reducer)

Elegant reducer

## Table of Contents

- [Match-reducer](#match-reducer)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [matchReducer](#matchreducer)
    - [makeActionsAndReducer](#makeactionsandreducer)
  - [Support](#support)
  - [Contributing](#contributing)

## Installation

`npm i -S match-reducer`

## Usage

### matchReducer

The matchReducer accept as first argument an object mapping action types with their respective reducers function.
Second argument (optionnal) accept the initialState and a boolean value for the passOnlyPayload property (default to false, pass the whole action to the reducer).

```javascript
import { matchReducer } from 'match-reducer'

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
  {
    initialState,
    passOnlyPayload: true
  }
)

reducer(null, { type: 'INC', payload: 1 })
// { counter: 1, something: 'else' }
```

### makeActionsAndReducer

Take the same aguments as matchReducer and return an object with a reducer and camelCased action creators with a type and payload property.

```javascript
import { makeActionsAndReducer } from 'match-reducer'

const { reducer, actionCreators } = makeActionsAndReducer(
  {
    INC_SOMETHING: (state, action) => ({
      counter: state.counter + action.payload
    })
  }
)

reducer({ counter: 0 }, actionCreators.incSomething(1) })
// { counter: 1 }
```

## Support

Please [open an issue](https://github.com/elcoosp/match-reducer/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/elcoosp/match-reducer/compare/).
