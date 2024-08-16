import { useState, useEffect, FC } from "react";

interface ParallaxInterface {
  id?: string | null;
  children?: JSX.Element;
  className?: string;
}

export const Parallax: FC<ParallaxInterface> = ({ id, children, className }) => {
  const [isPosMatch, setIsPosMatch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`#${id}`);
      if (element) {
        let pos = element.getBoundingClientRect();
        if (pos.top < 800) {
          setIsPosMatch(true);
        } else {
          setIsPosMatch(false);
        }
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <div
      id={id || "string"}
      className={`relative transition-all duration-500 ease-in-out ${
        isPosMatch ? 'opacity-100 scale-100 translate-y-0 bg-transparent' : 'opacity-0 scale-90 translate-y-5 bg-black'
      } ${className}`}
    >
      {children}
    </div>
  );
};
