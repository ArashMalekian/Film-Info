import React , {createContext, useState} from 'react'

export const statesHandlerContext = createContext({
    partShower : true,
    searchedShower : () => {},
    filmsShower : () => {}
})

export const StateHandlerContext = (props) => {
    const [part, setPart] = useState(true)

    const searchShowHandler = () => {
        setPart(false)
    }
    const filmsShowHandler = () => {
        setPart(true)
    }

    const data = {
        partShower : part,
        searchedShower : searchShowHandler,
        filmsShower : filmsShowHandler
    }
    return (
        <div>
            <statesHandlerContext.Provider value={data} >
                {props.children}
            </statesHandlerContext.Provider>
        </div>
    )
}
