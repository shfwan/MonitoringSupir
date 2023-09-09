import { Calendar, CountNotif, Filter, FilterHistory, Search } from "./type"

const initData = {
    calendar: "",
    search: "",
    filter: "Kendaraan",
    filterHistory: "All",
    countNotif: null,
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
        case FilterHistory:
            return {
                ...state,
                filterHistory: action.data
            }
        case CountNotif:
            return {
                ...state,
                countNotif: action.data
            }
        default: return state
    }
}