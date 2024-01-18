import { configureStore } from '@reduxjs/toolkit'
export const Store = () => {
    return configureStore({
        reducer: {},
    })
}

// Infer the type of Store
export type AppStore = ReturnType<typeof Store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']