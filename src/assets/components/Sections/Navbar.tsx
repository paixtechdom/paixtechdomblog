import { Link, useNavigate } from 'react-router-dom'
import logo from '../../img/logoLabelWhite.png'
import '../../Animation.css'
import { useContext, useState } from 'react'
import { Button } from '../Button'
import { AppContext } from '../../../App'
import { Navs } from '../../Constants'


export const Navbar = () =>{
    const { currentNav, setCurrentNav } = useContext<any>(AppContext)
    const navigate = useNavigate()
    const [ showNav, setShowNav ] = useState(false)



    document.querySelectorAll('#navLink').forEach((a) => {
        a.addEventListener('click', () => {
            setShowNav(false)
        })
    })
    
    
    
    return(
        <>
           <header className='w-full center  bg-gradient-to-l from-secondary via-primary to-secondary fixed min-h-[8vh] lg:min-h-[13vh] top-0 left-0 z-50 border-b border-blue-900'>
                <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex justify-between items-center">
                    <Link to='/' className="logo text-2xl z-[100] w-2/12" onClick={() => setShowNav(false)}>
                        <img src={logo} alt="Paix Techdom Logo" className='w-9/12  md:w-7/12 lg:w-5/12'/>
                    </Link>

                    <i className={`bi bi-${showNav ? 'x-lg' : 'list'} text-white cursor-pointer lg:hidden text-2xl z-[100]`} onClick={() => setShowNav(!showNav)}></i>

                    <nav className={`${showNav ? 'left-0' : '-left-[100vw] opacity-0 lg:opacity-100 lg:left-0'} bg-opacity-40 bg-secondary lg:bg-transparent backdrop-blur-3xl
                        transition-all duration-1000 absolute py-9 lg:py-0 w-full h-screen  lg:h-fit lg:w-fit top-0 pt-[15vh]  lg:pt-0 lg:relative flex flex-col lg:flex-row gap-9 lg:gap-7 xl:gap-9 items-center border-b border-orange -900 lg:border-b-0 px-9 lg:px-0`}>
                        {
                            Navs.map((nav, i) => (
                                <Link key={i} to={`/${nav.link}`} className={`flex w-full lg:w-fit gap-2 items-ce nter ${currentNav == i ? 'font-bold text-orange' : 'text-white'} hover:text-orange hover:border-b hover:border-blue-900`} onClick={() => {
                                    setCurrentNav(i)
                                    setShowNav(false)
                                    }}>
                                    <i className={`bi bi-${nav.icon} lg:hidden block`}></i>
                                    <p className="md:text-sm">
                                        {nav.name}
                                    </p>
                                </Link>
                            ))
                        }
                        <div className="w-full lg:w-fit">
                            <Button className={'w-fit'} text={'Contact Us'} icon={'telephone-fill'}
                            func={() => {
                                navigate('/Contact')
                                setShowNav(false)
                            }}
                            />
                        </div>

                    </nav>
                </div>
           </header>
        </>
    )
}


