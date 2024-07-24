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
import { BsLink45Deg } from "react-icons/bs"

export const PortfolioItems = [
    {
        title: 'Onidson Travels and Logistics Ltd',
        desc: ["Designed a user-friendly website with multiple pages dedicated to their services, aviation courses they offer and a detailed contact section", "Our work ensured a strong online presence and improved accessibility for their clients"],
        link: 'https://onidsontravels.com',
        img: onidson
    },
    {
        title: 'Saculiet Enterprises Nigeria',
        link: 'https://saculietdrivingschool.com',
        desc: ["For the Driving school arm of the company, we developed a website showcasing their service and expertise in the sector, featrueing a certificate verification portal for organizations, and a gallery for photos and vidoes."],
        img: saculietImg
    },
    {
        title: 'Macmay Group',
        link: 'https://macmaygroup.netlify.app',
        desc: ["We created a comprehensive multi-page website to shpwcase their diverse services in investments, agriculture, and food processing.", "The site provides detailed insights into their operations and enhances their online presence."],
        img: macmayImg
    },
    {
        title: 'Christ Liberty Assembly',
        desc: ["Developed a professional church website featuring a landing page, gallery, page for sermons and articles."],
        link: 'https://christlibertyassembly.org.ng',
        img: classImg
    },
    {
        title: 'Albert Interiors',
        link: 'https://albert-interiors.netlify.app',
        desc: ["For Albert Interiors, our landing page beautifully and elegantly highlights services and designs, offering a glimpse into their expertise in creating bespoke living spaces."],
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
                <meta property="og:title" content={`Our Works - Paix Techdom`} />
                <meta name="twitter:title" content={`Our Works - Paix Techdom`} />
            </Helmet>            
            <main id="Portfolio" className="flex-col overflow-hidden w-full pt-9 center">

                <section className="flex flex-col">
                    <PagesHero 
                        image={img}
                        text={["Discover the projects we've worked on, showcasing our skills in digital marketing and software development. Each project reflects our dedication to providing effective and innovative solutions."]}
                        header={'Discover our works'}
                        scrollTo={"pro"}
                    />
                </section>            
                
                <BreadCrumbs links={['Home', 'Our works']}/>

                <section id='pro' className="center flex-col gap- mt-[20vh] w-full">
                    <div className="w-11/12 lg:w-10/12 xl:w-9/12 mb-[10vh]">
                        <Parallax id={"ourworks"} className="w-full">
                            <h2 className="text-orange text-4xl my-4 w-full">Check out some of our projects</h2>
                        </Parallax>
                    </div>
                    <div className="flex flex-col w-11/12 lg:w-10/12 xl:w-9/12 gap-[20vh] lg:gap-[30vh]">

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
        // <a id={portfolio?.title.replaceAll(' ', '')} href={portfolio.link} target="_blank" className={`w-full center flex-col -reverse lg:flex-row${i%2 == 0 ? "-reverse" : ""} gap-[50px] lg:mb-0 relative overflow-hidden`} 
        <a id={portfolio?.title.replaceAll(' ', '')} target="_blank" className={`w-full center flex-col -reverse lg:flex-row${i%2 == 0 ? "-reverse" : ""} gap-[3vh] lg:gap-[50px] lg:mb-0 relative overflow-hidden`} 
            
        >                                
            <Parallax id={portfolio?.title.replaceAll(' ', '')} className={"lg:5/12 lg:h-[60vh] xl:h-[70vh] relative"}>
                <>
                <div className="absolute w-full h-full bg-transparent animate-pulse top-0 left-0"></div>

                <LazyLoadImage 
                    src={portfolio.img} 
                    placeholderSrc={portfolio.title} 
                    className="w-full h-full lg:object-fit"
                    effect="blur"
                />
                </>
            </Parallax>

            <Parallax id={portfolio?.title.replaceAll(' ', '')+'desc'} className="relative flex flex-col w-full gap-5">
                <>
                <h2 className="font-bold text-orange text-2xl">
                    {portfolio.title}
                </h2>
                <div className="flex flex-col gap-2">
                    {
                        portfolio.desc.map((p :string, i:number) => (
                            <p key={i} className="text-gray-300 relative">
                                {p}
                            </p>
                        ))
                    }
                </div>
                    
                <a href={portfolio.link} target="_blank" className="btn w-fit border border-orange font-light bg-transparent"> 
                    <BsLink45Deg className="text-2xl"/>
                    View Website</a>

                </>
            </Parallax>

        
    </a>
    )
}

export default Portfolio