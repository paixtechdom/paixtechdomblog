import { FC } from 'react'
import BlogCard, { BlogDataInterface } from './BlogCard'



const BlogCardList:FC<BlogDataInterface[] | any> = ({blogData}) => {
  return (
    <>
    <section className='center lg:w-full mb-[5vh]'>
        <div className="flex flex-col md:grid-cols-2 md:grid lg:grid-cols-3 w-full gap-9 gap-y-16">
          {
            blogData.map((b : BlogDataInterface) => (
              <BlogCard key={b.slug.current} blog={b}/>
            ))
          }
        </div>

    </section>
    </>
  )
}

export default BlogCardList