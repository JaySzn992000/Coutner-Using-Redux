const initialState = {
cart : [],
}

const rootReducers = (state = initialState,action) => {

switch (action.type) {
case 'Match':
return {

...state,
cart : [state.cart,action.payload]

}
default:
return state;

}

}

export default rootReducers;