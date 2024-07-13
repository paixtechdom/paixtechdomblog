import { FC, useContext, useEffect } from "react"
import { AppContext } from "../../App"

import { FAQ } from "../Components/FAQ"
import { BreadCrumbs } from "../Components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import albertImg from "../../assets/img/portfolioImgs/albert-interiors.png"
import classImg from "../../assets/img/portfolioImgs/classImg.png"
// import livingImg from "../../assets/img/portfolioImgs/livingWaters.png"
import macmayImg from "../../assets/img/portfolioImgs/macmayImg.png"
import saculietImg from "../../assets/img/portfolioImgs/saculietImg.png"
import onidson from "../../assets/img/portfolioImgs/onidsonImg.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { PagesHero } from "../Components/PagesHero"
import img from "../../assets/img/portfolio.jpg"
import { Parallax } from "../../assets/components/Parallax"

const PortfolioItems = [
    {
        title: 'Onidson Travels and Logistics Ltd',
        link: 'https://onidsontravels.com',
        img: onidson
    },
    {
        title: 'Saculiet Enterprises Nigeria',
        link: 'https://saculietdrivingschool.com',
        img: saculietImg
    },
    {
        title: 'Christ Liberty Assembly',
        link: 'https://christlibertyassembly.org.ng',
        img: classImg
    },
    {
        title: 'Macmay Group',
        link: 'https://macmaygroup.netlify.app',
        img: macmayImg
    },
    {
        title: 'Albert Interiors',
        link: 'https://albert-interiors.netlify.app',
        img: albertImg
    },
    // {
    //     title: 'Living Waters Fellowship',
    //     link: 'https://livingwatersglobal.netlify.app',
    //     img: livingImg
    // },
]



const Portfolio = () => {

    const { setCurrentNav } = useContext<any>(AppContext)
    useEffect(() => {
        setCurrentNav(3)
        document.documentElement.scrollTop = 0
    }, [])


    return(
        <>
            <Helmet>
                <title>
                    Our Works - Paix Techdom
                </title>
            </Helmet>            
            <main id="Portfolio" className="flex-col overflow-hidden w-full pt-9 center">

                <section className="flex flex-col">
                    <PagesHero 
                        image={img}
                        text={["Discover the projects we've worked on, showcasing our skills in digital marketing and software development. Each project reflects our dedication to providing effective and innovative solutions."]}
                        header={'Discover our Works'}
                        scrollTo={"pro"}
                    />
                </section>

                

                <BreadCrumbs links={['Home', 'Our works']}/>

                <section id='pro' className="center flex-col gap- mt-[20vh]">
                    <div className="w-11/12 lg:w-10/12 xl:w-9/12 mb-[10vh]">
                        <Parallax id={"ourworks"}>
                            <h2 className="text-blue-600 text-2xl my-4">Check out some of our projects</h2>
                        </Parallax>
                    </div>
                    <div className="flex flex-col lg:grid lg:grid-cols-2 w-11/12 lg:w-10/12 xl:w-9/12 gap-[10vh] lg:gap-[5vh] ">

                        {
                            PortfolioItems.map((portfolio, i) => (
                               <APortfolio  key={i} portfolio={portfolio} i={i}/>
                            ))
                        }
                    </div>
                </section>
            </main>




            <FAQ />

        </>
    )
    
}

const APortfolio:FC<any> = ({portfolio, i}) => {
 
    return(
        <a id={portfolio?.title.replaceAll(' ', '')} href={portfolio.link} target="_blank" className={`w-full center flex-col -reverse lg :flex-row${i%2 !== 0 ? "-reverse" : ""} gap-[50px] lg:mb-0 relative overflow-hidden`} 
            // useRef={projectRef}
        >
                                
        <Parallax id={portfolio?.title.replaceAll(' ', '')} className={"w-full min-h-[50vh] relative"}>
            <>
            <div className="absolute w-full h-full bg-secondary animate-pulse top-0 left-0"></div>

            <LazyLoadImage 
                src={portfolio.img} 
                placeholderSrc={portfolio.title} 
                className="w-full"
                effect="blur"
                />
            </>
        </Parallax>


        <div className="flex justify-center gap-5 absolute bottom-[5vh] md:bottom-0 min-h-[10vh] w-full text-center">
            <Parallax id={portfolio.title.replaceAll(' ', '')+'header'} className={"center max-w-[90%]"}>
                <div className="text-center border border-blue-900 bg-primary bg-opacity-80 p-3 px-6 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 justify-center max-w-full"><span>Click to view</span> <strong className="text-white"> {portfolio.title}</strong></div>
            </Parallax>
           
        </div>

        <div className={`top-0 absolute left-0 h-full w-full bg-secondary scale-125 transition-all duration-500 center flex-col lg:hover:opacity-90 active:opacity-90 opacity-0
        `}>
            <i className="bi bi-eye-fill text-4xl"></i> 
            <p>
                Click to view site
            </p>
        </div>
    </a>
    )
}

export default Portfolio