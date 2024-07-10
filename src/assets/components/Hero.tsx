import { FC } from 'react'
import { BsChatTextFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { BlogDataInterface } from './BlogCard'

const Hero:FC<BlogDataInterface | any> = ({blog}) => {
  return (
    <section className="hero bg-transparent min-h-[70vh] center">
      <div className="hero-content flex-col lg:flex-row-reverse gap-[50px]">
        <img
          src={blog.img}
          alt={blog.title}
          className='lg:w-5/12'
        />

        <div className='lg:w-9/12'>
          <div className="flex gap-4 items-center my-4 text-sm text-gray-300">
            <p>{blog.date}</p>
            <div className="flex items-center gap-2"> 
              <BsFillHandThumbsUpFill /> 
              {blog.noLikes}
            </div>
            <div className="flex items-center gap-2"> 
              <BsChatTextFill /> 
              {blog.noComments}
            </div>
          </div>

          <h1 className="text-4xl tracking-wide leading-[45px] font-bold text-blue-600">{blog.title}</h1>
          <p className="py-4 tracking-wide leading-relaxed text-gray-300">
          {blog.desc}
          </p>          
          <button className="btn bg-transparent border-blue-900 text-gray-100">Read Now</button>
        </div>
      </div>
    </section>
  )
}

export default Hero