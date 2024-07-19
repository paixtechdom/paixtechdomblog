import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {Suspense, useEffect, useState } from 'react';

import { HelmetProvider  } from 'react-helmet-async';


import ABlogPage from './pages/Blog/ABlog/page';
import Blog from './pages/Blog/page';

const Home = React.lazy(() => import('./pages/Home/Home'))
const About = React.lazy(() => import('./pages/About/About'))
const Services = React.lazy(() => import('./pages/Services/Services'))
const Portfolio = React.lazy(() => import('./pages/Portfolio/Portfolio'))
const Quote = React.lazy(() => import('./pages/Quote/Quote'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'))

import { Navbar } from './assets/components/Sections/Navbar';
import { Footer } from './assets/components/Sections/Footer';
import { IconButton } from './assets/components/Button';
import { Alert } from './assets/components/Alert';


import  "react-lazy-load-image-component/src/effects/opacity.css"
import  "react-lazy-load-image-component/src/effects/blur.css"
import { AppContext } from './App';
import { Loader } from './pages/Components/Loader';
import { HeroBg } from './assets/components/HeroBg';




export const AppRouter = () => {  
    const [ currentNav, setCurrentNav ] = useState(0)  
    const [ showNavBar, setShowNavBar ] = useState(false)
    const [ showALert, setShowAlert ] = useState(false)
    const [ alertMessage, setAlertMessage ] = useState('')
    const [ alertType, setAlertType ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ isScrollTopZero, setIsScrollTopZero ] = useState(true)
    const [ scrolledDown, setScrolledDown ] = useState(false)
    const  dbLocation = 'http://localhost:80/paixAPI'


  document.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 500){
        setScrolledDown(true)
    }else{
        setScrolledDown(false)
    }
})

  useEffect(() =>{
      document.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () =>{
    if(document.documentElement.scrollTop > 200){
      setIsScrollTopZero(false)
    }else{
      setIsScrollTopZero(true)
    }
  }


    return (
        <HelmetProvider>
            <AppContext.Provider value={{currentNav, setCurrentNav, showALert, setShowAlert, alertMessage, setAlertMessage, setAlertType, subject, setSubject, showNavBar, setShowNavBar, isScrollTopZero, setIsScrollTopZero, dbLocation}}>

                <Router>
                    <Suspense fallback={<Loader />}>
                        <Navbar />
                        <HeroBg />
                        
                        <IconButton icon={'arrow-up'} className={`fixed bottom-[15%] z-50 scale-125  transition-all duration-1000 lg:hidden ${scrolledDown ? 'right-[5%]' : '-right-[50%]'}`} func={() => {
                        scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}/>
                        {
                            showALert ? 
                            <Alert alertMessage={alertMessage} alertType={alertType} setShowAlert={setShowAlert}/> : ''
                        }



                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/services" element={<Services />}/>
                            <Route path="/works" element={<Portfolio />}/>
                            <Route path="/Quote" element={<Quote />}/>
                            <Route path="/contact" element={<Contact />}/>
                            <Route path="/blog" element={<Blog />}/>
                            <Route path="/blog/:slug" element={<ABlogPage />}/>

                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                        <Footer />
                    </Suspense>
                </Router>
            </AppContext.Provider>
        </HelmetProvider>
    );
  };


    