import { useContext } from "react"
import { AppContext } from "../../App"
import { useEffect } from "react"

import { PagesHero } from "../Components/PagesHero"
import { ContactForm } from "./ContactForm"
import contact from '../../assets/img/contact.png'
import { BreadCrumbs } from "../Components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { Parallax } from "../../assets/components/Parallax"
import { ContactInfo } from "../../assets/Constants"



const Contact = () => {
    const { setCurrentNav } = useContext<any>(AppContext)
 

    useEffect(() => {
        setCurrentNav(6)
        document.documentElement.scrollTop = 0
    }, [])

 

    return(
        <>
            <Helmet>
                <title>
                    Contact Paix Techdom
                </title>
            </Helmet>
            <main className="section contact flex flex-col items-center mt-9  overflow-hidden" id="Contact">
            <PagesHero 
                image={contact} 
                header={'Get in touch with us now'} 
                text={['Contact us now to get started with your premium package coupled with many free packages to generate more leads for your business.']} 
                scrollTo={'Values'} 
                button={false}
            />

            <BreadCrumbs links={['Home', 'Contact Us']}/>




                <section className={`center w-11/12 lg:w-10/12 xl:w-9/12  flex-col  items-center mt-[15vh] lg:mt-9 text-white`}>
                        <div className="flex items-end flex-col w-11/12 mb-[5vh] gap-4">
                            {
                                ContactInfo.map((contact, i) => (
                                    contact.title &&
                                    <Parallax key={i} id={contact.icon} className={'flex gap-4'}>
                                        <>
                                        <i className={`bi bi-${contact.icon}-fill text-xl `}></i>
                                        <a target="_blank" href={contact.link}>
                                            {contact.title}
                                        </a>
                                        </>
                                    </Parallax>
                                ))
                            }
                            <Parallax id={'contacticons'} className="flex gap-5">
                                <>
                                    {
                                        ContactInfo.map((contact, i) => (
                                            !contact.title &&
                                            <a key={i} target="_blank" href={contact.link} className="p-2 h-12 w-12 center relative">
                                                <div className="border rounded-tl-3xl rounded-br-3xl border-blue-900 absolute top-0 right-0 rotate-[45deg] w-full h-full">
                                                </div>
                                                <i className={`bi bi-${contact.icon} text-xl `}></i>
                                            </a>
                                        ))
                                    }
                                </>
                            </Parallax>
                        </div>
                        <ContactForm />

                

                </section>
            
            </main>
        </>
    )
}





export default Contact