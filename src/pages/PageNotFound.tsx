import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Parallax } from "../assets/components/Parallax"

const PageNotFound = () => {
    useEffect(() => {
      document.documentElement.scrollTop = 0 
    }, [])

    return(
      <Parallax id={'dlknxlgdksa'}>

          <div className='pt-[10vh] w-full flex flex-col items-center justify-center h-[70vh] text-gray-200'>
          
          <div className="text-6xl flex items-end">4<i className="bi bi-exclamation-circle-fill h-fit text-4xl mb-3 bg-red-700 center rounded-full"></i>4</div>
          
          <h2 className="text-7xl text-orange">
            Page not found 
          </h2>

          <Link className='mt-9 text-white border border-blue-900 bg-[rgba(0,0,35)] p-3 text-sm px-8 rounded-xl ' to='/'>Return to the Home Page <i className="bi bi-house-fill ml-2"></i></Link>
        </div>
      </Parallax>
    )
}

export default PageNotFound