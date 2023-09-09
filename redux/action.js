import { Calendar, Filter, Search, FilterHistory, CountNotif } from "./type"

export const setCalendar = (date) => ({
    type: Calendar,
    data: date
})

export const setSearch = (inputSearch) => ({
    type: Search,
    data: inputSearch
})

export const setFilter = (selectFilter) => ({
    type: Filter,
    data: selectFilter
})

export const setFilterHistory = (selectFilter) => ({
    type: FilterHistory,
    data: selectFilter
})

export const setCountNotif = (selectFilter) => ({
    type: CountNotif,
    data: selectFilter
})