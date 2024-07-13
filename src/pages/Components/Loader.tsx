import { FC, useEffect, useState } from "react"

export const Loader = () => {
    const [ loaderOpacity, setLoaderOpacity ] = useState(100)
    useEffect(() => {        
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            document.body.style.overflowY = 'auto'
        }, 1500);
        
        setTimeout(() => {
            setLoaderOpacity(50)
        }, 1400);        
    }, [])
    
    return(
        <div className={`fixed bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] center w-full h-screen top-0 left-0 flex-col z-50 transition-all durtion-[4s] opacity-${loaderOpacity}`}>
            <Ladder />

            <div className="center relative overflow-hidden flex-col z-10 bg-[rgba(0,0,24,0.8)] border border-blue-900 p-7 rounded-xl">
                <p className="font-bold text-3xl text-blue-600 ">Paix Techdom</p>

                <p className="text- italic text-sm text-gray-300">...growing your buisness...</p>
            </div>
                  

        </div>
    )
}


const Ladder = () => {
    const steps = [
        'a','b','c',
        'd','e','f'
    ]
    const [ lightUpLadder, setLightUpLadder ]  = useState(false)
    const [ lightUpStepsUp, setLightUpStepsUp ]  = useState(false)
    const [ lightUpStepsDown, setLightUpStepsDown ]  = useState(false)

    useEffect(() => {
        setLightUpLadder(true)
        setTimeout(() => {
            setLightUpStepsDown(true)
        }, 500);
        setTimeout(() => {
            setLightUpStepsUp(true)
        }, 1000);
    }, [])
    return(
        <div className="absolute text-white h-screen flex items-start justify-center w-full overflow-hidden">
            <div className="absolute z-10 h-screen bg-black bg-opacity-20 w-full"></div>

            <div className="flex justify-center w-4/12 md:w-[200px] z-0 h-screen">

                <LadderPole condition={lightUpLadder} rotate={'rotate-[2deg]'} />

                <div className="flex flex-col items-center justify-center w-full gap-[8vh]">
                    {
                        steps.map((s, i) => (
                        <p key={i} className={`w-full bg-[rgba(0,0,24)]  border-blue-800 h-6 transition-all duration-[2s] 
                        ${lightUpStepsUp ? 'border-t' : ''}
                        ${lightUpStepsDown ? 'border-b' : ''}
                        `} style={{
                                boxShadow: 'inset 0px 0px 10px 5px rgba(225,225,225,0.01)'
                            }}> <span className="hidden">{s}</span> </p>
                        ))
                    }
                </div>
                <LadderPole condition={lightUpLadder} rotate={'rotate-[358deg]'}/>

            </div>
        </div>
    )
}

interface PoleInterface{
    condition: boolean, 
    rotate: string
}

const LadderPole:FC<PoleInterface> = ({condition, rotate}) => {
    return(
        <div className={`h-[170vh] w-5 bg-[rgba(0,0,24)] borde r border-blue-100  z-10 relatiive -translate-y-[5vh] ${rotate}`} 
        style={{
            boxShadow: 'inset 0px 0px 6px 5px rgba(225,225,225,0.01)'
        }}>
            <div className={`absolute bg-transparent w-full h-3 border-l border-r border-blue-400 transition-all duration-[2s] bottom-0 ${condition ? 'h-full' : ''}`}></div>
        </div>

    )
}