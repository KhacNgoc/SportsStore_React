import { createStore } from "redux";
import { ShopReducer } from "./shopReducer";

export const SportsStoreDataStore = createStore(ShopReducer);