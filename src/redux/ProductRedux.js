import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getProductRequest: ['data'],
  getProductSuccess: ['payload'],
  getProductFailure: ['error']
})

export const ProductTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: false,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const ProductSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) => {
  return { ...state, fetching: true, data, payload: null }
}

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return { ...state, fetching: false, error: null, payload }
}

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action
  return { ...state, fetching: false, error: error, payload: null }
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCT_REQUEST]: request,
  [Types.GET_PRODUCT_SUCCESS]: success,
  [Types.GET_PRODUCT_FAILURE]: failure,
})