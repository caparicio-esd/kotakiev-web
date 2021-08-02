import React, { useEffect, useState } from 'react'

const originalMenuItems = [
    'Conócenos',
    'Música',
    'Conciertos',
    'Merch',
    'Contacto',
]

export const NavigationContext = React.createContext(undefined)

export const NavigationContextProvider = (props) => {
    const [menuItems, setMenuItems] = useState(originalMenuItems)
    const navigateToMenu = (index: number): void => {}
    const value = [menuItems, navigateToMenu]
    return (
        <NavigationContext.Provider value={value}>
            {props.children}
        </NavigationContext.Provider>
    )
}
