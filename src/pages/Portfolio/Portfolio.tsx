import { FC, useContext, useEffect } from "react"
import { AppContext } from "../../App"

import { FAQ } from "../Components/FAQ"
import { BreadCrumbs } from "../Components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import albertImg from "../../assets/img/portfolioImgs/albert-interiors.png"
import livingImg from "../../assets/img/portfolioImgs/livingWaters.png"
import bsicadvertisement from "../../assets/img/portfolioImgs/bsicadvertisement.png"
import macmayImg from "../../assets/img/portfolioImgs/macmayImg.png"
import saculietImg from "../../assets/img/portfolioImgs/saculietImg.png"
import onidson from "../../assets/img/portfolioImgs/onidsonImg.png"
import donatex from "../../assets/img/portfolioImgs/donatex.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { PagesHero } from "../Components/PagesHero"
import img from "../../assets/img/portfolio.jpg"
import { Parallax } from "../../assets/components/Parallax"
import { BsLink45Deg } from "react-icons/bs"

export const PortfolioItems = [
    {
        title: 'BSIC Advertisement',
        desc: ["Designed and developed a sleek, high-performance website for BSIC Advertising, a brand solutions agency for influencer marketing. Built with WordPress, the site ensures seamless navigation, fast loading speeds, and an engaging user experience.", 
        "It features additional pages, including Services, About, Creators (showcasing influencers), Blog, and a Booking page linked externally for streamlined appointment scheduling."],
        link: 'https://bsicadvertisement.com',
        tools: ["Wordpress", "PHP"],
        img: bsicadvertisement
    },
    {
        title: 'Living Waters Fellowship',
        desc: ["Developed with a responsive design, the website features key sections; Home, Who We Are, and Media. The media section houses downloadable audio messages and images.", "For French Speaking user, a language toggle was added to seamlessly switch between French and English, hereby, increasing the ministry's reach."],
        link: 'https://livingwatersglobalministry.org',
        tools: ['React', 'Tailwindcss', 'PHP'],
        img: livingImg
    },
    {
        title: 'Donatex Diagnostics and Global Services',
        desc: ["The project aimed to create a user-friendly, informative and visually appealing online presence for Donatex Diagnostics and Global Services.", "The website highlighted  the agency's extensive range of services, expertise and commitment to delivering high-quality patient care", "Key features include a responsive design, clear navigation, prominent display of services and expertise, call-to-actions for easy inquiry and appointment scheduling and google map for easy navigation to the agency's physical location."],
        link: 'https://donatexdiagnostics.com.ng',
        tools: ['React', 'Tailwindcss'],
        img: donatex
    },
    {
        title: 'Onidson Travels and Logistics Ltd',
        desc: ["Designed a user-friendly website with multiple pages dedicated to their services, aviation courses they offer and a detailed contact section", "Our work ensured a strong online presence and improved accessibility for their clients"],
        link: 'https://onidsontravels.com',
        tools: ['React', 'Tailwindcss'],
        img: onidson
    },
    {
        title: 'Saculiet Enterprises Nigeria',
        link: 'https://saculietdrivingschool.com',
        desc: ["For the Driving school arm of the company, we developed a website highlighting their service and expertise in the sector, featuring a certificate verification portal for organizations, and a gallery for photos and videos."],
        tools: ['React', 'Tailwindcss', "PHP"],
        img: saculietImg
    },
    {
        title: 'Macmay Group',
        link: 'https://macmaygroup.vercel.app',
        desc: ["We created a comprehensive multi-page website to highlight their diverse services in investments, agriculture, and food processing.", "The site provides detailed insights into their operations and enhances their online presence."],
        tools: ['React', 'Tailwindcss'],
        img: macmayImg
    },
    {
        title: 'Albert Interiors',
        link: 'https://albert-interiors.vercel.app',
        desc: ["For Albert Interiors, our landing page beautifully and elegantly highlights services and designs, offering a glimpse into their expertise in creating bespoke living spaces."],
        tools: ['React', 'Tailwindcss'],
        img: albertImg
    },
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
                <meta property="description" content={`Discover the projects we've worked on, showcasing our skills in digital marketing and software development. Each project reflects our dedication to providing effective and innovative solutions.`} />
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
        <div id={portfolio?.title.replaceAll(' ', '')} className={`w-full center flex-col -reverse lg:flex-row${i%2 == 0 ? "-reverse" : ""} gap-[3vh] lg:gap-[50px] lg:mb-0 relative overflow-hidden`} 
            
        >                                
            <div id={portfolio?.title.replaceAll(' ', '')} className={"lg:w-6/12 min-h-[40vh] relative min-w-[250px] md:min-w-[400px]"}>
                <>
                <div className="absolute w-full max-h-[30vh] bg-black bg-opacity-80 animate-pulse top-0 left-0"></div>

                <LazyLoadImage 
                    src={portfolio.img} 
                    placeholderSrc={portfolio.title} 
                    className="w-full h-full"
                    effect="blur"
                    threshold={100}
                />
                </>
            </div>

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

        
    </div>
    )
}

export default Portfolio