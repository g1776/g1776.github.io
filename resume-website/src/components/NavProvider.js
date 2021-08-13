import {createContext, useContext, useMemo, useState} from "react";
import Nav from './Nav'

const NavContext = createContext({})

const NavProvider= ({ children }) => {
    const [hasNav, setHasNav] = useState(true)

    const closeNav = (next) => {
        setHasNav(false)

        if (next)
            next()
    }

    const openNav = (next) => {
        setHasNav(true)

        if (next)
            next()
    }

    const value = useMemo(() => ({
        hasNav,
        closeNav,
        openNav
    }), [
        hasNav,
        closeNav,
        openNav
    ])

    return (
        <NavContext.Provider value={value}>
        { hasNav && <Nav style={{flex: "0 1 auto"}}/> }
        { children }
        </NavContext.Provider>
    )
}

export const useNav = () => useContext(NavContext)
export default NavProvider