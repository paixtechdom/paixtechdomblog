import { Gain, logo } from '../../assets/Constants'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { ImageAndText } from '../Components/ImageAndText'
import rocket from '../../assets/img/rocket.png'
import freemium from '../../assets/img/freemium.png'
import { Numbers } from './Numbers'
import { Hero } from './Hero'
import { GridSlider } from '../Components/GridSlider'
import { Steps } from './Steps'
import { Helmet } from "react-helmet-async"



const Home = () => {
    const { setCurrentNav } = useContext<any>(AppContext)
    useEffect(() => {
        setCurrentNav(0)
        document.documentElement.scrollTop = 0
    }, [])
    return(

        <>       
            <Helmet>
                <title>
                    Paix Techdom - Web Development Company
                </title>
                <link rel="icon" type="image/png" href={logo} />
            </Helmet>
        <main>

            <Hero />
            
            <Numbers />        

            <ImageAndText 
                id={'ahsf'} 
                title={"Boost Your Online Presence Now"} 
                desc={["Take the first step to improve your digital footprint. Whether it's creating a new website or updating your current one, let us help you expand your awareness, generate more leads, and increase your revenue."]} 
                img={rocket} 
                iconText={'Start Now'} 
                icon={'arrow-right'} 
                navigateTo={'contact'}
                />
        
            <GridSlider 
                data={Gain}
                />

            <Steps />

            <ImageAndText 
                id={'secondwhikadbjcob'} 
                title={'Unlock Free and Premium Features Today'} 
                desc={['In addition to your custom-built website, unlock a range of premium and free packages tailored to meet all your needs effortlessly.']} 
                img={freemium} 
                className={'flex-col-reverse lg:flex-row-reverse'} 
                iconText={'View Packages'} 
                icon={'arrow-right'} 
                navigateTo={'pricing'}
                />
        </main>
        </>
    )
}

export default Home