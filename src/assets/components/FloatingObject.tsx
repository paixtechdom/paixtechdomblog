import { FC, useEffect } from 'react'
import './Float.css'
import { useState } from 'react'

interface ObjectInterface {
    className: string,
    speed: number,
    text: string
}

export const FloatingObject:FC<ObjectInterface> = ({className, speed}) => {
    
    const [ pos, setPos ] = useState({ x: -10, y: -10 })


    useEffect(() => {
        moveObj()    
        const interval = setInterval(() => {
            moveObj()    
        }, (speed*1000));

        return(() => clearInterval(interval))
    }, [])

    const moveObj = () => {
        const q = parseInt((Math.random() * 100).toFixed())
        let x = Math.ceil(q / 10) * 10
        
        const p = parseInt((Math.random() * 100).toFixed())
        let y = Math.ceil(p / 10) * 10
        
        setPos({
            ...pos,
            x: x,
            y: y,
        })
        // console.log(pos)
        
    }
    return(
            <div className={`absolute animate animation-all duration-[10s] animate-pulse inset-3 z-50 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center cursor-pointer ${className} active:animate-ping`} style={{
                top: pos.y+'%',
                left: pos.x+'%',
            }}>
            </div>

    )
}