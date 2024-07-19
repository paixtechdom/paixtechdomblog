import { useContext, useEffect } from "react";
import { BreadCrumbs } from "../Components/BreadCrumbs";
import { AppContext } from "../../App";
import quote from '../../assets/img/quote.png'
import { PagesHero } from "../Components/PagesHero";
import { QuoteForm } from "./QuoteForm";
import { Helmet } from "react-helmet-async"
import { Packages } from "./Packages"
import { Parallax } from "../../assets/components/Parallax";

const Quote = () => {
    const { setCurrentNav } = useContext<any>(AppContext) 

    useEffect(() => {
        setCurrentNav(5)
        document.documentElement.scrollTop = 0
    }, [])

    
    return(
        <>
            <Helmet>
                <title>
                    Get a quote at Paix Techdom
                </title>
            </Helmet>
            <main className="bg-blue-fade flex flex-col items-center  overflow-hidden pt-9">

                <PagesHero 
                    image={quote} 
                    header={'Get a quote now'} 
                    text={[
                        'Start the transformative journey your business deserves today',
                        '']} 
                    scrollTo={'Values'}
                />
                
            <BreadCrumbs links={['Home', 'Get a Quote']}/>
            
            <Parallax id="packages" className={'w-full center pb-[7vh] pt-[15vh]'}>
                <div  className="center w-11/12 lg:w-10/12 xl:w-9/12">
                    <Packages />
                </div>
            </Parallax>

            <section className="w-11/12 lg:w-10/12 xl:w-9/12 mt-[9ch]">
                <QuoteForm />
            </section>

                

        </main>
        </>
    )
}


export default Quote;