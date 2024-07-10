import { FC } from 'react'
import { Link } from 'react-router-dom'

export interface BlogDataInterface {
    title?: string,
    desc?: string,
    date: string,
    id?: string,
    img?: any,
    content?: string[],
    noComments?: number,
    noLikes?: number,
    section?: string
  }

const BlogCard:FC<BlogDataInterface | any> = ({blog}) => {

  return (
    <Link to={`/${blog.id}`} className="card bg-base-100 w-fit shadow-xl relative">
        <figure className='bg-secondary'>
           <img 
            src={blog.img}
            alt={blog.title}
            className='w-full md:h-[30vh] md:object-cover'
           />
        </figure>
        <div className="card-actions justify-start absolute top-5 left-5">
            <div className="badge badge-secondary">New</div>
            <div className="badge badge-outline">{blog.section}</div>
        </div>
        <div className="card-body bg-primary w-full gap-5">
            <h2 className="card-title text-lg font-light">
            {blog.title}
            </h2>
            <div className="card-actions justify-end">
            <button className="btn btn-primary min-w-full bg-transparent border-blue-600 text-gray-200 btn-circle">Read now</button>
            </div>
        </div>
    </Link>
  )
}



export default BlogCard

export const CardSkeleton = () => {
    return(
        <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        </div>
    )
}
