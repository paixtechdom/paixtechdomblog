import { FC, useEffect, useRef, useState } from "react"
import { HeroContent } from '../../assets/Constants'

import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import { Button } from "../../assets/components/Button"



const Hero = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)
    
    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 10000);
        return () => clearInterval(int)
    }, [currentSlide])

    const slide = () => {
        setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
    }


    const handleTouchStart = (e:any) => {
        setStartX(e.touches[0].clientX)
    }
    const handleTouchEnd = (e:any) => {
        const deltaX = e.changedTouches[0].clientX - startX
        const threshold = 100;
        if(Math.abs(deltaX) > threshold){
            slide()
        }else if(deltaX< 0 && currentSlide < HeroContent.length - 1){
            setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
        }
    }



    return(
        <section className="relative center w-full lg:h-screen  overflow-hidden pt-[3vh] md:pt-[5ch] lg:pt-0">
            <div className="absolute hidden lg:flex w-full justify-between items-center z-20 ">

                <div className="bi bi-chevron-left text-5xl text-gray-100 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-r-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => setCurrentSlide(currentSlide == 0 ? HeroContent.length - 1 : prev => prev - 1)}></div>

                <div className="bi bi-chevron-right text-5xl text-gray-100 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-l-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => 
                    setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
                    }></div>


            </div>

                <XlSlider currentSlide={currentSlide} />
                <SmSlider currentSlide={currentSlide} sliderRef={sliderRef} handleTouchEnd={handleTouchEnd} handleTouchStart={handleTouchStart}/>

            <div className="center absolute top-[85vh] md:top-[90vh] z-20">
                <div className="center gap-3 bg-secondary backdrop-blur-xl border border-orange bg-opacity-30 p-4 rounded-full px-9">
                    {
                        HeroContent.map((i, j) => (
                            <p key={j} className={`${currentSlide == j ? 'h-4 lg:h-5 w-4 lg:w-5 bg-orange ' : 'w-3 h-3 bg-secondary'} border border-orange  rounded-full transition-all duration-500 cursor-pointer`} onClick={() => setCurrentSlide(j)}>
                               <span className="hidden">{i.header}</span></p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}


const XlSlider:FC<SliderInterface> = ({currentSlide}) => {
    return(
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 justify-between flex-col lg:flex-row items-center gap-[10ch] text-gray-100 hidden lg:flex z-20">
                <div className="overflow-hidden w-8/12 h-screen">

                    <div className={`flex flex-col w-full transition-all duration-1000 h-screen`} style={{
                        height: HeroContent.length*100+'vh',

                        transform: `translateY(-${currentSlide}00vh)`
                    }}>

                        {
                            HeroContent.map((content, i) => (
                                <div key={i} className="flex flex-col h-screen justify-center gap-4">

                                    <h1 className="text-4xl font-bold text-orange leading-[40px]">    
                                        {content.header}
                                    </h1>
                                    <div className="text-gray-100  tracking-wide leading-relaxed flex flex-col gap-3">{
                                        content.text.map((cont, i) => (
                                            <p key={i}>{cont}</p>
                                        ))
                                    
                                    }</div>
                                    <Link to={"/Contact"}>
                                        <Button 
                                            text={'Start Now'} 
                                            className="w-fit" 
                                            icon={'cursor-fill'}
                                        />
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                </div>
                
                
                
                <div className="overflow-hidden flex items-end w-5/12 h-screen">

                    <div className={`flex flex-col-reverse items-end w-full transition-all duration-1000 `} style={{
                        height: HeroContent.length*100+'vh',

                        transform: `translateY(${currentSlide}00vh)`
                    }}>

                        {
                            HeroContent.map((content, i) => (
                                <div key={i} className="center w-full overflow-hidden rounded-3xl h-screen">
                                    <LazyLoadImage 
                                        src={content.img} 
                                        placeholderSrc={'Image for ' + content.header} 
                                        effect='blur'    
                                        className="w-full h-fit rounded-3xl"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>                
            </div>
    )
}

interface SliderInterface {
    currentSlide?: number,
    sliderRef?: any,
    handleTouchStart?: any,
    handleTouchEnd?: any

}

const SmSlider:FC<SliderInterface> = ({currentSlide, sliderRef, handleTouchStart, handleTouchEnd}) => {
    return(
        <div className="w-11/12 flex justify-center flex-col items-center text-gray-100 lg:hidden gap-9 z-20" 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
        >
            <div className="overflow-hidde n w-full flex justify-start h-fit pt-[15vh]">

                <div className={`flex transition-all duration-1000`} style={{
                    width: HeroContent.length*100+'vw',
                    transform: `translatex(-${currentSlide}00vw)`
                }}>

                    {
                        HeroContent.map((content, i) => (
                            <div key={i} className="flex flex-col  justify-center w-[100vw] gap-4">

                                <h1 className="text-4xl text-orange w-[85%] leading-[50px]">
                                    {content.header}
                                </h1>
                                <div className="text-gray-100  tracking-wide leading-relaxed w-[90%]">
                                    {content.text}
                                </div>
                                <Link to={"/Contact"}>
                                    <Button 
                                        text={"start now"} 
                                        className={"w-fit"} 
                                        icon={'cursor-fill'}
                                    />
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
            
            
            
            <div className="overflow-hidden w-[100vw] flex justify-end items-start max-h-96 md:max-h-96 rounded-3xl">

                <div className={`flex flex-row-reverse transition-all duration-1000 h-fit`} style={{
                        width: HeroContent.length*100+'vw',
                        transform: `translatex(${currentSlide}00vw)`
                }}>

                    {
                        HeroContent.map((content, i) => (
                            <div key={i} className="flex justify-center w-[100vw] overflow-hidden">
                                <div key={i} className="center w-11/12 h-fit gap-4 overflow-hidden">
                                    <img src={content.img} alt={'Image for ' + content.header} className="w-full h-full object-fit rounded-3xl"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>                
        </div>
    )
}


export { Hero}