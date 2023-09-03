import { Calendar, Filter, Search } from "./type"

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