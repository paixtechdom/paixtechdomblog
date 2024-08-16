import { FC, useEffect, useState } from "react"

// interface GridSliderInterface{
//     id: string,
//     title: string,
//     icon: string,
//     desc: string
// }

export const GridSlider:FC<any> = ({data}) =>{

return(
        <section className="flex flex-col items-center my-[10vh] overflow-hidden">

        <div  className={`grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-9/12 gap-9`}>

            {
                data.map((d:any, i:number) => (
                    <Parallax key={i} id={d.id} className='h-full w-full flex flex-col border border-blue-900 bg-secondary bg-opacity-30 p-9 rounded-xl gap-2 leading-relaxed tracking-wide' index={i}>
                        <>
                            <div className="flex relative w-fi center h-12 md:h-16 w-2/12 md:w-3/12 p-3 mb-3">
                                <div className="absolute border border-blue-900 top-0  left-50 w-12 h-12 md:w-16 md:h-16 rotate-45 rounded-tl-[25px]  rounded-br-[25px]">

                                </div>
                                <i className={`bi bi-${d.icon} text-2xl md:text-4xl text-orange -400`}></i>
                            </div>

                            <h2 className="text-orange text-2xl">
                                {d.title}
                            </h2> 
                            {
                                d.desc &&
                            <p className="text- md text-gray-100">
                                {d.desc}
                            </p>
                            }
                        </>
                    </Parallax>
                ))
            }

        </div>
                  
        </section>

    )
}

interface ParallaxInterface {
  id?: string;
  children?: JSX.Element;
  className?: string;
  index: number;
}

const Parallax: FC<ParallaxInterface> = ({ id, children, className, index }) => {
  const [isPosMatch, setIsPosMatch] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      const pos = element.getBoundingClientRect();
      if (pos.top > -150 && pos.top < 1100) {
        setIsPosMatch(true);
      } else {
        setIsPosMatch(false);
      }
    }
  };

  useEffect(() => {
    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <div id={id} className="relative w-full">
      <div
        className={`relative transition-all duration-[1s] ease-in-out ${
          !isPosMatch
            ? `${
                index % 2 === 0
                  ? '-translate-x-[25vw] opacity-0'
                  : 'translate-x-[25vw] opacity-0'
              }`
            : ''
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Parallax;
