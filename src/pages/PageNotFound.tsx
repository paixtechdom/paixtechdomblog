import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return(
        <div className='w-full bg-white flex flex-col items-center justify-center h-96'>
        <div className="text-5xl">404</div>
        <p className="text-xl">
          Page not found 
        </p>

        <Link className='mt-9 text-black underline bg-blue p-3 text-sm px-8 rounded-xl ' to='/'>Click to got to to home page</Link>
      </div>
    )
}