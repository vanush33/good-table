import { useMemo, useState } from "react"
import { ItemsDataParams } from "../pages/shop"

const itemsPerPage = 12
//this component maintains data about filtering
export const useShopPagination = (tables: ItemsDataParams[]) => {
    const [priceRange, setPriceRange] = useState({from: '', to: ''})
    const [currentPage, setCurrentPage] = useState(1)
    const [option, setOption] = useState('all')
    //set filters
    const filterData = useMemo(() => {
        const from = parseInt(priceRange.from)
        const to = parseInt(priceRange.to)
        let currentData:ItemsDataParams[] = tables
        //setting filters on category and price
        if (option !== 'all') {
            currentData = tables.filter(item => item.category === option)
        }
        if (from) {
            currentData = currentData.filter(item => item.price > from)
        }
        if (to) {
            currentData = currentData.filter(item => item.price < to)
        }
        //sorting price ascending
        return currentData.sort((a, b) => a.price - b.price)
    }, [option, priceRange])
    const currentItems = useMemo(() => {
        //set elements of the page
        return filterData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    }, [filterData, currentPage]);
    //set pages quantity
    const pages = [];
    for (let i = 1; i <= Math.ceil(filterData.length / itemsPerPage); i++) {
        pages.push(i);
    }
    return {currentPage, setCurrentPage, setOption, currentItems, pages, priceRange, setPriceRange}
}