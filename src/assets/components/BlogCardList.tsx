import { FC } from 'react'
import BlogCard, { BlogDataInterface, CardSkeleton } from './BlogCard'



const BlogCardList:FC<BlogDataInterface[] | any> = ({blogData}) => {
  return (
    <section className='center lg:w-full mb-[15vh]'>
        <div className="flex flex-col md:grid-cols-2 md:grid lg:grid-cols-3 w-full gap-9 gap-y-16">
          {
            blogData.map((b : BlogDataInterface, i:number) => (
              <BlogCard key={i} blog={b}/>

            ))
          }
          <CardSkeleton />
        </div>

    </section>
  )
}

export default BlogCardList