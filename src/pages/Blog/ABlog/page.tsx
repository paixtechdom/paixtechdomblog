import Hero from '../../../assets/components/Hero'
import { useParams } from 'react-router-dom'
import { Client } from '../../../lib/Client'
import { useEffect, useState } from 'react'
import { BlogDataInterface } from '../../../assets/components/BlogCard'
import BlockContent from "@sanity/block-content-to-react"
import styles from "./ABlog.module.css"

const ABlogPage = () => {
    const {slug} = useParams()
    const [ blog, setBlog ] = useState<BlogDataInterface | any>({})

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    useEffect(() => {
      document.title = `Reading | ${blog?.title}`
    }, [blog])
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
              return <h2 className="text-blue-600">{props.children}</h2>;
            case 'h3':
              return <h3>{props.children}</h3>;
            case 'h4':
              return <h4>{props.children}</h4>;
            case 'h5':
              return <h5>{props.children}</h5>;
            case 'h6':
              return <h6>{props.children}</h6>;
            case 'blockquote':
              return <blockquote className={styles.blockquote}>{props.children}</blockquote>;
            case 'code':
              return (
                <pre className={styles.pre}>
                  <code>{props.children}</code>
                </pre>
              );
            default:
              return <p className={styles.paragraph}>{props.children}</p>;
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
        return <Tag className={styles.list}>{props.children}</Tag>;
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
    <main className="min-h-screen center flex-col bg-gradient-to-r from-secondary via-primary to-secondary pb-[10vh] relative">

      <div className="w-11/12 lg:w-10/12 xl:w-9/12  min-h-screen fleex items-center flex-col text-lg gap-[50px] ] pt-[5vh] lg:pt-[2ch]">
        {
          blog?.title && 
          <>
            <Hero blog={blog}/>

            <BlockContent 
              blocks={blog.body}
              projectId="m218clx9"
              dataset="production"
              serializers={serializers}
              />
            </>
          }

        {/* <BlogCardList blogData={Blogs} /> */}

      </div>

    </main>
    </>
  )
}

export default ABlogPage