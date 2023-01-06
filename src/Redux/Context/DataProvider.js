import React, { createContext, useContext, useReducer, useState } from 'react'

// Prepare the dataLayer
export const NoteContext = createContext();

// Wrap our app and provide the data layer
export const DataProvider = ({ reducer, initialState, children }) => {
    return (
        <NoteContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </NoteContext.Provider>
    )
}

export const useStateValue = () => useContext(NoteContext);