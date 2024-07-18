import { useContext, useEffect } from "react"
import { AppContext } from "../../App" 
import { PagesHero } from "../Components/PagesHero"
import compass from '../../assets/img/compass.png'
import brainstorm from '../../assets/img/brainstorm.png'
import globe from '../../assets/img/globe.png'
import tool from '../../assets/img/tool.png'
import { ImageAndText } from "../Components/ImageAndText"
import { Values } from "./Values"
import { BreadCrumbs } from "../Components/BreadCrumbs"
import { Helmet } from "react-helmet-async"



const About = () => {
    const { setCurrentNav } = useContext<any>(AppContext)
    useEffect(() => {
        setCurrentNav(1)
        document.documentElement.scrollTop = 0
    }, [])
        /* 
            share business story and history and provide deeper connection with customers
            facilitates trust, form an emotional connection
            why the business was founded
            values, mission, beliefs and vision
            answer questions customers may have about the business
        */
    return(
        <>
        <Helmet>
            <title>
                About Paix Techdom
            </title>
        </Helmet>
        <main className="flex flex-col overflow-hidden w-full pt-9">


            <PagesHero 
                image={compass} 
                header={'About Paix Techdom'} 
                text={[
                    'At Paix Techdom, we are committed to empowering organizations, startups, and companies with the perfect website solutions to enhance awareness, generate leads, and foster growth.',
                    'With a dedicated focus on custom website development, we tailor our services to address your unique preferences, needs, and challenges.']} 
                scrollTo={'Values'}/>
                <BreadCrumbs links={['Home', 'About Us']}/>
            
            <Values />
                

            <ImageAndText 
                img={brainstorm} 
                title={'Our Story'} 
                desc={[
                    'Paix Techdom was born out of the desire and passion to equip you as an organization, startup, small, medium or large size company with one of the critical tools for thriving not only digitally but in our physical world.',
                    
                   'We believe in your dreams and goals and we are ready to contribute our all to bringing such dreams to life and achieving such goals.'
                ]} 
                id={'sfndjbgslsnlk'} 
                iconText={'Learn more'} 
                icon={'arrow-down'} 
                scrollTo={'ourvision'}
                />
                
            <ImageAndText 
                img={globe} 
                title={'Our Vision'} 
                desc={[
                    'We aim to be a top leading Tech Company worldwide, providing endless robust and innovative solutions to all.'
                ]} 
                id={'ourvision'} 
                iconText={'Learn more'}  
                className={'flex-col-reverse lg:flex-row-reverse'} 
                icon={'arrow-down'} 
                scrollTo={'ourmission'}
            />

            <ImageAndText 
                img={tool} 
                title={'Our Mission'} 
                desc={[
                    'To equip organizations, startups, small, medium and large size companies with digital solutions needed to scale up, optimize and automate their business'
                ]} 
                id={'ourmission'} 
                iconText={'Learn more'}
                className={'flex-col-reverse  lg:flex-row-reverse'} 
                icon={'arrow-down'} 
                scrollTo={'FAQ'}
            />



        </main>
        </>
    )
}

export default About;