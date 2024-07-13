import { useContext, useEffect } from "react"
import { useState } from "react"
import { AppContext } from "../../App"

export const ScrollTop = () =>{
    const [ showScrollTop, setShowScrollTop ] = useState(false)
    const { mediumScreen } = useContext<any>(AppContext)

    useEffect(() => {
       
        setShowScrollTop(document.documentElement.scrollTop > 700 && mediumScreen ? true : false)
        
    }, [document.documentElement.scrollTop])

    
        return(
    <>
        {
            showScrollTop ?
        <div className="fixed bottom-5 right-5 bg-blue text-white flex items-center justify-center rounded-full text-4xl" style={{
            width: 50+'px',
            height: 50+'px',
        }}>
            <i className="bi bi-arrow-up-short">
            
            </i>
            </div> : ''
        }
        </>
    )
}