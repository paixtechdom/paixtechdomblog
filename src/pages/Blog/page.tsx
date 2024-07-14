import { BiSearch } from "react-icons/bi";
import BlogCardList from "../../assets/components/BlogCardList";
import { useState, useEffect, useContext } from "react"
import { Client } from "../../lib/Client"
import { BlogDataInterface, CardSkeleton } from "../../assets/components/BlogCard";
import { Helmet } from "react-helmet-async"
import { AppContext } from "../../App";

export default function Blog() {
  const [ fetchedBlogs, setFetchedBllogs ] = useState([])
  const [ fetching, setFetching ] = useState(false)
  const [ searchInput, setSearchInput ] = useState("")
  const blogs = fetchedBlogs?.filter((b : BlogDataInterface) => b.title.toLowerCase().includes(searchInput.toLowerCase()))
  
  const { setCurrentNav } = useContext<any>(AppContext)
  useEffect(() => {
    setCurrentNav(4)
    fetchBlogs()
 
    window.scrollTo(0,0)
}, [])

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     fetchBlogs()
  // }, 1000);

  // return () => clearTimeout(delay)
  // }, [searchInput])

  const fetchBlogs = () => {
      setFetching(true)
      Client.fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        category,
        mainImage {
          asset -> {
            _id,
            url
            },
            alt,
          },
          "name": auth -> name
        } | order(publishedAt desc)`
      ).then((data) => {
        setFetchedBllogs(data)
        setFetching(false)
      })
      .catch((error) => {
        setFetching(false)
        console.error(error.cause)
      })
  }

  

  return (
    <>
       <Helmet>
            <title>
                Blogs - Paix Techdom
            </title>
        </Helmet>
      <main className="min-h-screen center pb-[15vh] relative">
          <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col">

          <section className="min-h-[60vh] lg:min-h-[80vh] center w-full gap-[50px] pt-[15vh] lg:pt-[5ch]">
            <div className="flex flex-col center gap-5 w-full text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 w-full lg:w-9/12">
                Articles, Ideas and Inspirations for you
              </h1>
              <p className="text-gray-300 w-11/12 lg:w-8/12">
              Discover the latest in web development, technology, and business through our articles tailored to your needs.
              </p>
              {/* <p className="text-gray-300 w-11/12 lg:w-9/12">
                Looking to stay updated with latest trends on web, tech and business hacks? <br />Get fresh updates in your inbox to get started now
              </p> */}
              {/* <form className="center flex-col lg:flex-row items-center gap-4"> */}
                {/* <input type="text" placeholder="Your email" className="input"/> */}
                <button type="submit" className="flex items-center gap-4 btn bg-transparent hover:bg-transparent hover:scale-90 transition-all duration-500 border-blue-600" onClick={() => {
                  document.querySelector("#search")?.scrollIntoView({
                    behavior: "smooth"
                  })
                }}>
                    Get Inspired Today
                  {/* <span className="">
                  </span> */}
                </button>

              {/* </form> */}
            </div>

          </section>

          <section id="search" className="lg:w-11/12 pt-[15vh] lg:pt-[5vh]">
            <div className="lg:w-full mb-[20vh] flex items-center flex-col lg:flex-row gap-3 bg-secondary p-5 rounded-2xl md:px-8 lg:justify-between min-h-[20vh]">
              <h2 className="font-bold text-2xl text-center lg:text-left">Explore our list of blogs tailored for you</h2>
              <div className="items-center input flex gap-4 w-full lg:w-fit">

                <BiSearch className="text-xl"/>
                <input type="text" className="w-full" 
                  placeholder="Search" value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />

              </div>
          </div>

          </section>

          {
            !fetching ?
            <>
              {
                blogs[0] ?
                <BlogCardList blogData={blogs} />  : 
                <h2 className="text-xl">No blog found</h2>
              }
            </>
            : 
              <CardSkeleton />
          }
        </div>

      </main>
    </>
  );
}


