import React,{useState,createContext} from 'react'

const StoreContext = createContext()
export const StoreProvider = ({children})=> {
    const [latex, setLatex] = useState("\\frac{\\partial }{\\partial\:x}\\left(r\\cdot sinwx\\right)")
    const [showDrawer, setshowDrawer] = useState(true)
    const [result, setresult] = useState(1478.6)
    const value={
        latex,
        setLatex,
        showDrawer,
        setshowDrawer,
        result,
        setresult
    }
    return (
        <div>
            <StoreContext.Provider value={value}>
                {children}
            </StoreContext.Provider>
        </div>
    )
}

export default StoreContext