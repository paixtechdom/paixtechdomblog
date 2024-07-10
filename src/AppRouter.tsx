import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Suspense } from 'react';

// import { delayLoad } from "./assets/Functions"
import { HelmetProvider  } from 'react-helmet-async';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

// const HomePage = lazy(() => delayLoad(import("./pages/home/page")))

import { PageNotFound } from './pages/PageNotFound';
import Home from './pages/Home/page';
import ABlogPage from './pages/ABlog/page';




export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/:slug" element={<ABlogPage />}/>

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };



  const Loader = () => {
    return(
        <section className='h-screen w-full bg-white  center flex-col text-4xl  text-center gap-4 text-gray-900'>
           
           Hello world Loader 
            <p className="text-sm">Seamless Travel, Planned for Your Next Journey</p>
        </section>
    )
  }