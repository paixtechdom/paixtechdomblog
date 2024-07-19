import { FC, useEffect, useState } from 'react'
import { PortfolioItems } from '../Portfolio/Portfolio'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Parallax } from '../../assets/components/Parallax'
import { Link } from 'react-router-dom'
import { Button } from '../../assets/components/Button'

const SomeProjects = () => {
  return (
    <section className="center flex-col py-[15vh] pt-[10vh]">
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 mb-[2vh]">
            <Parallax id={"recentworks"} className="w-full flex flex-col">
                <>
                <h2 className="text-blue-600 text-4xl my-4 w-full">Recent projects</h2>
                {/* <Link to="/works" className='btn bg-transparent hover:bg-secondary hover:border-blue-900 border-blue-900 w-fit'>VIEW MORE</Link> */}
                </>
            </Parallax>
        </div>
        <div className="flex flex-col w-11/12 lg:w-10/12 xl:w-9/12 lg:flex-row gap-[50px] lg:gap-4 overflow-hidden my-[3vh]">

            
            {
                PortfolioItems.map((item, i) => (
                    i < 3  &&
                    <Item item={item}/>
                ))
            }
        </div>        
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 mt-[5vh]">
            <Parallax id={"recentworks"} className="w-full flex flex-col">
            <>
                <Link to="/works" className='w-fit'>
                    <Button
                        text='view more projects'
                        icon='arrow-right'
                    />
                </Link>
            </>
            </Parallax>
        </div>
    </section>
  )
}


const Item:FC<any> = ({item}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)

    const handleScroll = () => {
        const element = document.querySelector(`#${item.title.replaceAll(' ', '')}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if( pos.top < 300){
                setIsPosMatch(true)
            } else{
                setIsPosMatch(false)
            }

        }
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <Parallax id={item.title.replaceAll(' ', '')} className='w-full'>
            <Link to="/works" id={item.title.replaceAll(' ', '')} className="center overflow-hidden lg:h-[40vh] xl:h-[50vh] relative w-full  bg-secondary border border-blue-900 bg-opacity-40 rounded-2xl">
                <div className={`transition-all duration-1000 ease-in-out center h-full m-[15%] ${isPosMatch ? "scale-125 hover:scale-100" : "hover:scale-125"}`}>
                    <LazyLoadImage 
                        src={item.img} 
                        alt={item.title} 
                        width={'100%'}
                        className={`w -8/12 rounded-xl`}
                        effect="blur"
                        />
                </div>

            </Link>
        </Parallax>
    )

}

export default SomeProjects