import { createStore } from "redux";
import { reducerData } from "./reducer"

const storeState = createStore(reducerData)
export default storeState
