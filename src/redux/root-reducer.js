import { combineReducers }  from 'redux';
import userReducer from './User/user-reducer';
import cartReducer from './Cart/Cart-reducer';

//Persist Library:
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);