import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rooms from './Rooms/RoomsSlice'
import chess from './Chess/chessSlice'
import alert from './Alert/alertSlice'
import auth from './Authorization/authSlice'
import onlineUsers from './Online/onlineUsersSlice'

const rootReducer = combineReducers({ auth, alert, rooms, chess, onlineUsers })

const presistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(presistConfig, rootReducer)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
//         })
// })
// const persistor = persistStore(store)

// export { persistor, store }

// localStorage.clear() // when uncomment lines above

const store = configureStore({ reducer: rootReducer })

export { store }
