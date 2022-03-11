import React, { createContext, useState } from 'react'

const ListContext = createContext();
 

const ListProvider = ({ children }) => {
    const [lista, setLista] = useState({ listA: [], listB: [] })
    return (
        <ListContext.Provider value={{ lista: lista, setLista: setLista }}>
            {children}
        </ListContext.Provider>
    )
}

export {ListProvider};
export default ListContext;
