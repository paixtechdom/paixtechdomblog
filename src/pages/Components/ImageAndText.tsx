
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'
import { Parallax } from '../../assets/components/Parallax'
import { Button } from '../../assets/components/Button'
import { FC } from 'react'

interface ImageTextInterface{
    id?: string,
    title?: string, 
    desc?: string[], 
    img?: string, 
    className?:string, 
    iconText?: string, 
    icon?:string, 
    scrollTo?: string, 
    navigateTo?: string
}

export const ImageAndText:FC<ImageTextInterface> = ({id, title, desc, img, className, iconText, icon, scrollTo, navigateTo}) => {
    const navigate = useNavigate()
    return(
        
        <section id={id} className='flex justify-center my-[20vh] lg:my-[5vh] text-gray-100 lg:min-h-[80vh] items-center'>
            
            <div className={`center ${className ? className : 'flex-col lg:flex-row'} w-11/12 lg:w-10/12 xl:w-9/12 gap-[5ch]`}>
                <div className={`flex flex-col gap-4 lg:w-10/12`}>
                    <Parallax id={`shit${id}`}>
                        <h2 className={`text-4xl text-orange -600`}>{title}</h2>
                    </Parallax>
                    
                    <Parallax id={`shiet${id}`}>
                        <div className={`text-gray-100 tracking-wide leading-relaxed gap-2 flex flex-col `}>
                        {
                        desc?.map((d:string, i:number) => (
                                <p key={i}>{d}</p>
                            ))
                        }
                        
                        </div>
                    </Parallax>

                    <Parallax id={`btn${id}`}>
                    <Button text={iconText || ''} icon={icon} className={'w-fit'} func={() => {
                        scrollTo ?
                        document?.querySelector(`#${scrollTo}`)?.scrollIntoView({
                            behavior: 'smooth'
                        })
                        : 
                        navigate(navigateTo || '')
                    }}/>
                    </Parallax>
                    
                </div>
                
                <Parallax id={`shit${id}`} className={'w-fit lg:w-8/12 center relative'}>
                    <>
                        <div className={`absolute w-full min
                        -h-[10vh] lg:min-h-[35vh] h-[90%] border-blue-900 border-2 rounded-3xl ${className ? ' -left-[15px]' : ' -right-[15px]'}  scale-90 -bottom-[5px] bg-secondary animate-pulse`}>

                        </div>

                        <LazyLoadImage
                            src={img} 
                            placeholderSrc={'Image to describe ' + title} 
                            className={` w-fit h-full rounded-3xl scale-90 ${className ? 'translate-x-[10px]' : '-translate-x-[10px]'}  -translate-y-[10px]`}
                            effect='blur'
                        />
                    </>
                </Parallax>
           
            </div>
        </section>
    )
}