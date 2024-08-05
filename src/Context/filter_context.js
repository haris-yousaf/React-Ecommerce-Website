import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from '../reducer/filterReducer'


const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    list_view: false,
    filters: {
        category: "all",
    }
}

export const FilterContextProvider = ({children}) => {

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        return dispatch({type: "SET_GRIDVIEW"})
    }

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}})
    }

    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
    }, [products, state.filters])

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
    }, [products])

    return (<FilterContext.Provider value={{...state, setGridView, updateFilterValue}}>
        {children}
    </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}