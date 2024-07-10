import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { Blogs } from "../../assets/BlogInfo";
import BlogCardList from "../../assets/components/BlogCardList";
import { useState, useEffect } from "react"
import { Client } from "../../lib/Client"
import { format } from "date-fns"

export default function Home() {
  const [ blogs, setBlogs ] = useState([])

  useEffect(() => {
    Client.fetch(
      `*[_type == "post"] {
      title,
      slug,
      body,
      publishedAt,
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
      setBlogs(data)
      console.log(data)
    })
    .catch((error) => {
      console.error(error.cause)
    })
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-r from-secondary via-primary to-secondary center">
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col">
        <section className="hero bg-transparent min-h-[80vh] center w-full gap-[50px]">
          <div className="flex flex-col center gap-5 w-full text-center">
            <h1 className="text-5xl font-bold text-blue-600">
              Articles, Ideas and Inspirations for you
            </h1>
            <p className="text-gray-300 w-11/12 lg:w-9/12">
              Get fresh updates in your inbox to stay updated with trends tailored for you
              Get fresh updates in your inbox to stay updated with trends tailored for you
            </p>
            <form className="center flex-col lg:flex-row items-center gap-4">
              <input type="text" placeholder="Your email" className="input"/>
              <button type="submit" className="flex items-center gap-4 btn bg-transparent border-blue-600">
                <BsBellFill />
                <span className="">
                  Subscribe
                </span>
              </button>

            </form>
          </div>

        </section>

        <section className="lg:w-11/12 mt-[5vh] lg:mt-0 mb-[20vh] flex items-center flex-col lg:flex-row gap-3 bg-secondary p-5 rounded-2xl md:px-8 justify-between min-h-[20vh]">
          <h2 className="font-bold text-3xl">Explore our list of blogs tailored for you</h2>
          <div className="items-center input flex gap-4 w-fit">
            <BiSearch className="text-xl"/>
            <input type="text" className="w-full" placeholder="Search"/>
          </div>
        </section>

        <BlogCardList blogData={Blogs} />
      </div>

    </main>
  );
}


