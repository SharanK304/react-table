import { combineReducers } from 'redux'

import TableReducer from './tableSlice'
// import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  table: TableReducer,
//   filters: filtersReducer
})

export default rootReducer

