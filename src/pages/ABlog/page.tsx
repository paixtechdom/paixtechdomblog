import Hero from '../../assets/components/Hero'
import { BlogDataInterface } from '../../assets/components/BlogCard'
import { Blogs } from '../../assets/BlogInfo'
import { useParams } from 'react-router-dom'

const ABlogPage = () => {
    const params = useParams()
    const blog : BlogDataInterface = Blogs.filter(blog => blog.id == params.slug)[0] 
  
  return (
    <div>
    <main className="min-h-screen bg-gradient-to-r from-secondary via-primary to-secondary center">
      <div className="w-11/12 lg:w-10/12 xl:w-9/12  min-h-screen center flex-col">

        <Hero blog={blog}/>
             
        {/* <section className="lg:w-11/12 mt-[5vh] lg:mt-0 mb-[15vh] flex items-center flex-col lg:flex-row gap-3 bg-secondary p-5 rounded-2xl md:px-8 justify-between min-h-[20vh]">
          <h2 className="font-bold text-3xl">Explore our list of blogs tailored for you</h2>
          <div className="items-center input flex gap-4 w-fit">
            <BiSearch className="text-xl"/>
            <input type="text" className="w-full" placeholder="Search"/>
          </div>
        </section> */}

        {/* <BlogCardList blogData={Blogs} /> */}

      </div>

    </main>
    </div>
  )
}

export default ABlogPage