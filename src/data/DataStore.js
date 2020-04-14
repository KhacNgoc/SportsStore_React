import { createStore } from "redux";
import { ShopReducer } from "./shopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer));