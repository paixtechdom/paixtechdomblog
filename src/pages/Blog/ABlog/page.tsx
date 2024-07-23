import Hero from '../../../assets/components/Hero'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Client } from '../../../lib/Client'
import { useContext, useEffect, useState } from 'react'
import { BlogDataInterface } from '../../../assets/components/BlogCard'
import BlockContent from "@sanity/block-content-to-react"
import styles from "./ABlog.module.css"
import { AppContext } from '../../../App'
import { Helmet } from "react-helmet-async"


const ABlogPage = () => {
    const {slug} = useParams()
    const [ blog, setBlog ] = useState<BlogDataInterface | any>({})
    const navigate = useNavigate()

    const { setCurrentNav } = useContext<any>(AppContext)
    useEffect(() => {
      setCurrentNav(4)
      window.scrollTo(0,0)
    }, [])
    
    // useEffect(() => {
    //   document.title = `Reading | ${blog?.title}`
    // }, [blog])
    useEffect(() => {

      Client.fetch(
        `*[slug.current == "${slug}"] {
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
        }`
      ).then((data) => {
        setBlog(data[0])
        // console.log(data[0])
      })
      .catch((error) => {
        console.error(error.cause)
        navigate('/page_not_found')
      })
    }, [slug])


    const serializers = {
      types: {
        block: (props: any) => {
          const { style = 'normal' } = props.node;
          switch (style) {
            case 'h1':
              return <h1>{props.children}</h1>;
            case 'h2':
              return <h2 className="text-orange text-3xl mt-[7vh] mb-5 lg:mt-[12vh]">{props.children}</h2>;
            case 'h3':
              return <h3 className="lg:mt-[8vh] mb-3  mt-[5vh] text-orange text-xl">{props.children}</h3>;
            case 'h4':
              return <h4 className="mt-5 mb-3 leading-relaxed tracking-wide font-bold">{props.children}</h4>;
            case 'h5':
              return <h5 className="mt-4 mb-3">{props.children}</h5>;
            case 'h6':
              return <h6 className="mt-3 mb-2">{props.children}</h6>;
            case 'blockquote':
              return <blockquote className={styles.blockquote}>{props.children}</blockquote>;
            case 'code':
              return (
                <pre className={styles.pre}>
                  <code>{props.children}</code>
                </pre>
              );
            default:
              return <p className={styles.paragraph + " text-gray-100 mb-3 leading-relaxed tracking-wide"}>{props.children}</p>;
          }
        },
        // image: (props: any) => (
        //   <img
        //     src={props.node.asset.ref}
        //     alt={props.node.alt}
        //     className={styles.image}
        //   />
        // ),
        code: (props: any) => (
          <pre className={styles.pre} data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
      },
      list: (props: any) => {
        const { type } = props;
        const Tag = type === 'bullet' ? 'ul' : 'ol';
        return <Tag className={styles.list + " mt-2 mb-3 text-gray-100 leading-relaxed tracking-wide"}>{props.children}</Tag>;
      },
      listItem: (props: any) => <li className={styles.listItem}>{props.children}</li>,
      marks: {
        strong: (props: any) => <strong>{props.children}</strong>,
        em: (props: any) => <em>{props.children}</em>,
        code: (props: any) => <code>{props.children}</code>,
        link: (props: any) => (
          <a href={props.mark.href} target="_blank" rel="noopener noreferrer" className="underline">
            {props.children}
          </a>
        ),
        underline: (props: any) => <u>{props.children}</u>,
        strikeThrough: (props: any) => <s>{props.children}</s>,
      },
    };

  
  return (
    <>
      <Helmet>
        <title>
            {`Reading | ${blog?.title || "Blog Post"}`}
        </title>
        <meta name="description" content={`${blog?.body[0].children[0].text.substring(0,100)}...`} />
        <meta property="og:title" content={`Reading | ${blog?.title || "Blog Post"}`} />
        <meta property="og:description" content={`${blog?.body[0].children[0].text.substring(0,100)}...`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://paixtechdom.com/blog/${slug}`} />
        <meta property="og:image" content={blog?.mainImage?.asset?.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Reading | ${blog?.title || "Blog Post"}`} />
        <meta name="twitter:description" content={`${blog?.body[0].children[0].text.substring(0,100)}...`} />
        <meta name="twitter:image" content={blog?.mainImage?.asset?.url} />
    </Helmet>


    <main className="min-h-screen center flex-col bg-gradient-to-r from-secondary via-primary to-secondary pb-[10vh] relative">
    {
          blog?.title && 
          <div className="w-full lg:w-9/12 xl:w-8/12 ">
            <Hero blog={blog}/>
          </div>
        }
      <div className="w-11/12 lg:w-9/12 xl:w-7/12  min-h-screen fleex items-center flex-col ">
        {
          blog?.title && 
          <>
            <BlockContent 
              blocks={blog.body}
              projectId="m218clx9"
              dataset="production"
              serializers={serializers}
              />
            </>
          }

        

        <Link to="/blog" className="mt-12 btn border-blue-600">
          Checkout more insightful blogs
        </Link>

      </div>

    </main>
    </>
  )
}

export default ABlogPage