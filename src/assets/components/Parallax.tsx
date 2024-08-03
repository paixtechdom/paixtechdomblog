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
        return () => document.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <div  id={id || "string"} className={`relative  transition-all ease-in-out duration-1000 ${isPosMatch ? '' : 'opacity-[0] scale-[0.9] top-[5vh] bg-black'} ${className}`}>
            {children}
        </div>
    )
}