import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Dependencies } from "./dependencies";
import { useDispatch } from "react-redux";

const reducers: any = {}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<typeof reducers>;
export type AppDispatch = AppStore["dispatch"];
export type AppGetState = AppStore["getState"];

export const createStore = (config: {
    initialState?: any,
    dependencies: Dependencies
}) => {
    const store = configureStore({
        preloadedState: config.initialState,
        reducer: reducers, 
        devTools: process.env.NODE_ENV !== "production"
    });

    return store;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();