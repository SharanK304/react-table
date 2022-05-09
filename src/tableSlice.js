
const initialState = { 
    data:[
      {
        firstName: "John",
        lastName: "Doe",
        age:'35',
        gender: "M"
      },
      {
        firstName: "Smith",
        lastName: "Doe",
        age:'30',
        gender: "F"
      },
      {
        firstName: "Tom",
        lastName: "Doe",
        age:'8',
        gender: "M"
    }]
}

function TableReducer(state = initialState, action) {
    if (action.type === 'table/loadTable') {
        return {
            ...state,
        }
    }

    if (action.type === 'table/rowData') {
        return {
            ...state,
            message:'You can put any component you want here, even another React Table!'
        }
    }
    
    return state
}

export default TableReducer;