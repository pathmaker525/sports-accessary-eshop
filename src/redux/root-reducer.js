import { combineReducers }  from 'redux';
import userReducer from './User/user-reducer';
import cartReducer from './Cart/Cart-reducer';
import shopReducer from './Shop/shop-reducer';
import directoryReducer from './Directory/directory-reducer';

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
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);