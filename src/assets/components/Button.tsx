import { FC, useEffect, useState } from "react"

interface ButtonInterface {
    text: string, 
    className?: string, 
    icon?: string,
    func?: Function
    showIcon?: boolean,
    setShowNav?: Function
}

const Button:FC<ButtonInterface> = ({text, className, icon, func, showIcon, setShowNav}) => {

    const [ hovered, setHovered ] = useState(false)
    useEffect(() => {
        if(showIcon){
            setHovered(showIcon)
        }
    }, [showIcon])

    return(
        <div className={`cursor-pointer text-sm p-1 center transition-all duration-500 px-4 border border-blue-900 h-fit rounded-xl rounded-tr-[20px] ${className} flex gap-3 overflow-hidden bg-[rgba(0,0,35)]`} 
            onClick={() => {
                if(func){
                    func()
                }
                if(setShowNav){
                    setShowNav(false)
                }
            }}
            onMouseOver={() => {
                setHovered(true)
            }} 

            onMouseOut={() => {
                setHovered(showIcon ? true : false)
            }} 
            >
                {text.toUpperCase()}

                <p className={`rounded-full bg-blue-900 text-sm transition-all duration-500 h-7 center ${hovered ? "translate-y-0 w-7" : "w-0 translate-y-10"}`}>
                    <i className={`bi bi-${icon}`}></i>
                </p>
            </div>
        )
}

interface IconButtonInterface {
    icon: string, 
    func: Function, 
    className: string
}

const IconButton:FC<IconButtonInterface> = ({icon, func, className}) => {
    return(
        <i className={`bi bi-${icon} ${className} cursor-pointer text-xl transition-all duration-1000 center p-6 border  border border-blue-900 bg-[rgba(0,0,35)] h-10 w-10 rounded-xl rounded-tl-[25px] text-blue-300`} 
        onClick={() => func()}
        ></i>
    )
}

export { Button, IconButton}