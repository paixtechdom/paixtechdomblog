import { FC, useEffect } from 'react'
import { useState } from 'react'

import { numbers } from '../../assets/Constants'
import { Parallax } from '../../assets/components/Parallax'


export const Numbers = () => {

    return(
        
        <section className='flex justify-center w-full my-9 py-9'>
            <div className={`grid grid-cols-2 w-9/12 lg:w-5/12`}>
                {
                    numbers.map((num, key) => (
                        <No num={num} key={key} i={key}/>
                    ))
                    }
            </div>
        </section>
    )
}

// interface numbersInterface {
//     title: string, 
//     img: string,
//     no: number,
//     speed: number
// }
const No:FC<any> = ({num, i}) => {
    const [ newNo, setNewNo ] = useState(0)

    useEffect(() => {
        const int = setInterval(() => {
            read()
        }, num.speed);
        return () => clearInterval(int)
    }, [newNo])

    const read = () => {
        setNewNo(newNo == num.no ? num.no : newNo + 1)
    }
//    table issue with display 
    return(
        <div className={`center m-auto flex-col gap-2 shadow-lg transition-all duration-1000 p -9 relative h-[16ch] w-[16ch] border border-orange
            ${
                i == 0 ? "border-b-0 border-r-0 rounded-t-3xl" :
                i == 1 ? "border-l-0 border-b-0 rounded-t-3xl" :
                i == 2 ? "border-l-0 border-b-0 rounded-b-3xl" :
                i == 3 ? "border-b-0 border-r-0 rounded-b-3xl" : ""
            }
        `}>
            
            {/* <div className="w-full h-full rounded-tl-[10ch] rounded-br-[10ch] border border-blue-900 absolute top-0 left-0 rotate-[45deg]"></div> */}
            
            <Parallax id={num.title}>
                <>
                <p className='text-3xl text-orange -400 text-center'>{newNo}+</p>
                <div className='flex items-center text-gray-100 gap-2 my-2 text-sm'>
                    <i className={`bi bi-${num.img} text-2xl`}></i>
                    <p>{num.title}</p>

                </div>
                </>
            </Parallax>
    </div>
    )
}