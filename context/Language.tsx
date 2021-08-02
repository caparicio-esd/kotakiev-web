import React, { useEffect, useState } from 'react'

const originalLangs = ['ES', 'EN']

export const LanguageContext = React.createContext(undefined)

export const LanguageContextProvider = (props) => {
    const [langs, setLangs] = useState(originalLangs)
    const [activeLang, setActiveLang] = useState(0)
    const value = [langs, activeLang, setActiveLang]
    return (
        <LanguageContext.Provider value={value}>
            {props.children}
        </LanguageContext.Provider>
    )
}
