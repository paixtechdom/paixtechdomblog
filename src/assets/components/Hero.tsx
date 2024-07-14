import { FC } from 'react'
// import { BsChatTextFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { BlogDataInterface } from './BlogCard'
import { format } from "date-fns"



const Hero:FC<BlogDataInterface | any> = ({blog}) => {
  return (
    <section className="hero bg-transparent min-h-[80vh] center">
      <div className="hero-content flex-col lg:flex-row-reverse gap-[50px]">
        <img
          src={blog?.mainImage?.asset?.url}
          alt={blog?.mainImage?.alt}
          className='lg:w-5/12'
        />
        
        <div className='w-11/12 lg:w-9/12'>
          <div className="flex gap-4 items-center text-sm text-gray-300">
              <p className="text-sm">
                {blog?.name} &middot; {format(new Date(blog?.publishedAt), "dd MMM yyy")}
              </p>
            </div>

          <h1 className="text-4xl tracking-wide leading-[45px] font-bold text-blue-600 capitalize">{blog?.title}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero