import { combineReducers } from "redux";
import incrementDecrement from "./incrementDecrement";
import dataStorage from "./initialStoreData";

const rootReducer = combineReducers(
    {
        incrementDecrement,
        dataStorage
    }
);

export default rootReducer