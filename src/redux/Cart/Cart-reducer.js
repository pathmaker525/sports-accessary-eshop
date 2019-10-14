import CartActionTypes from './Cart-types'

const initialState = {
    hidden: true
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
           return {
               ...state,
               hidden: !state.hidden
           }

        default:
            return state;
    }
}

export default cartReducer;