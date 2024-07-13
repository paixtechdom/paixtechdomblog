import { useState, useEffect, FC } from "react"

interface ParallaxInterface{
    id?: string | null, 
    children?: JSX.Element,
    className?: string
}

export const Parallax:FC<ParallaxInterface> = ({id, children, className}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)

    useEffect(() =>{
        const pos = document.querySelector(`#${id}`)?.getBoundingClientRect()
        if(pos){

            if(pos.top < 800){
                setIsPosMatch(true)
            }
        }
        }, [])
    const handleScroll = () => {
        const element = document.querySelector(`#${id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < 800){
                setIsPosMatch(true)
            }
        }
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div  id={id || "string"} className={`relative  transition-all duration-1000 ${isPosMatch ? ' top-0 ' : 'opacity-0 scale-[0.2] top-[5vh]'} ${className}`}>
            {children}
        </div>
    )
}