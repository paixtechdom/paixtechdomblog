import { useEffect, useState } from "react"
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import  "react-lazy-load-image-component/src/effects/blur.css"
// import  "react-lazy-load-image-component/src/effects/opacity.css"


export const Loader = () => {
    const [ animate, setAnimate ] = useState(false)
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        
        setTimeout(() => {
            document.body.style.overflowY = 'auto'
        }, 3000);
        
        setTimeout(() => {
            setAnimate(true)
        }, 500);
    }, [])
    
    return(
        <div className="fixed bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] center w-full h-screen top-0 left-0 flex-col z-50">

            <div className="border h-[50px] w-9/12 lg:w-6/12 border-blue-900 center relative rounded-full overflow-hidden flex-col">

                <p className="font-bold text-xl text-blue-600 z-0  ">Paix Techdom</p>

                <p className="text- italic text-xl text-gray-300 z-0  ">...growing your buisness...</p>

                <div className={`bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] w-[100%] absolute  h-full z-10 transition-all duration-[2s] ${animate ? 'left-[100%]' : '-left-5'} border-l border-3 border-blue-900`}>
                </div>
            </div>
                  

        </div>
    )
}