import { PagesHero } from "../Components/PagesHero"
import services from '../../assets/img/services.png'
import { ServiceList } from "./ServiceList"
import { AppContext } from "../../App"
import { useContext, useEffect } from "react"
import { FAQ } from "../Components/FAQ"
import { BreadCrumbs } from "../Components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { Parallax } from "../../assets/components/Parallax"


const ServicesTo =['Businesses looking to establish an online presence.', 'Startups', 'Medium to Large Enterprises', 'Digital Agencies', 'Non-profit Organizations', 'Educational Institutions', 'Government Agencies', 
'Developers interested in learning new technologies or improving their skills.',
'Anyone with an idea or concept they want to bring to life on the web.'
]

const Services = () =>{
    const { setCurrentNav } = useContext<any>(AppContext)
    useEffect(() => {
        setCurrentNav(2)
        document.documentElement.scrollTop = 0
    }, [])
   
    return(
        <>
            <Helmet>
                <title>
                    Our Services at Paix Techdom
                </title>
            </Helmet>                    
            <main className="bg-blue-fade flex flex-col items-center  overflow-hidden pt-9">
                <PagesHero 
                    image={services} 
                    header={'What we do'} 
                    text={['Our services page showcases our commitment to equipping organizations, startups, and companies of all sizes with the right tools and solutions for their online presence and activities. We offer a comprehensive range of digital services tailored to meet the your unique needs.',
                    'From website development to online marketing strategies, we empower businesses to thrive in the digital age and achieve their goals with confidence.']} 
                    scrollTo={'servicelist'}
                />

                <BreadCrumbs links={['Home', 'Our Services']}/>

            
                <ServiceList />
                <Parallax id={'iam'}>
                    <div className="my-[10vh].border-t border-blue-900"></div>
                </Parallax>
                <section className="w-11/12 lg:w-10/12 xl:w-9/12 mt-[10vh]">
                    <div className="flex flex-col w-full gap-7">
                        <Parallax id={'spfdpog'}>
                            <h3 className="text-orange text-4xl my-4">
                                We offer our services to
                            </h3>
                        </Parallax>
                        {
                            ServicesTo.map((service, i) =>(
                                <Parallax key={i} id={service[0]}>

                                    <div key={i} className="flex items-center justify-start text-gray-300 gap-5">
                                        <i className="bi bi-check-circle-fill text-orange"></i>
                                        <p>
                                            {service}
                                        </p>
                                    </div>
                                </Parallax>
                            ))
                        }
                    </div>
                </section>

                <FAQ />


            </main>
        </>

    )
}



export default Services