import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import FormReducer from './reducers/FormSlice';

const rootReducer = combineReducers({
  FormReducer,
})

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']