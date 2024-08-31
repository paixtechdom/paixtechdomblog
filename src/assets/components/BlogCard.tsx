import { FC } from 'react'
import { Link } from 'react-router-dom'
import { format } from "date-fns"
import { LazyLoadImage } from 'react-lazy-load-image-component'

  interface imageAsset {
    url: string,
    id: string
  }
  interface mainImageInterface{
    alt: string, 
    asset: imageAsset
  }
  interface slugInterface {
    current: string,
    _type: string
  }
  export interface BlogDataInterface{
    body: any[],
    mainImage: mainImageInterface,
    name: string,
    publishedAt: string,
    slug: slugInterface,
    title: string
  }

const BlogCard:FC<BlogDataInterface | any> = ({blog}) => {

  return (
    <Link to={`/blog/${blog.slug.current}`} className="card w-full shadow-xl relative overflow-hidden p-0 bg-secondary">
      <figure className="min-h-[20vh]">
           <LazyLoadImage 
            src={blog?.mainImage?.asset.url}
            placeholderSrc={blog?.mainImage.alt}
            width={100+"%"}
            className='m-0 md:h-[30vh] md:object-cover relative'
            effect="blur"
            threshold={100}
           />
        </figure>

        <div className="card-body w-full gap-1 pt-4">

          <div className='flex flex-col'>
            <h2 className="card-title text-lg capitalize font-bold text-orange">
            {blog?.title}
            </h2>
            <p className="text-sm m-0 text-gray-500">
              {blog.name && blog.name + `&middot;`}  {format(new Date(blog.publishedAt), "dd MMM yyy")}
            </p>
          </div>

            {/* <p className='text-gray-300'>
            {blog?.body[0].children[0].text.substring(0, 100)} ...
            <strong>more</strong>
            </p> */}
            <div className="card-actions justify-end mt-4">
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
