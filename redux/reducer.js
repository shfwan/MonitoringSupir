import { Calendar, Filter, Search } from "./type"

const initData = {
    calendar: "",
    search: "",
    filter: ""
}

export const reducerData = (state = initData, action) => {
    switch(action.type) {
        case Calendar:
            return {
                ...state,
                calendar: action.data
            }
        case Search:
            return {
                ...state,
                search: action.data
            }
        case Filter:
            return {
                ...state,
                filter: action.data
            }
        default: return state
    }
}