import { useEffect, useState } from "react";
import maxone from "./assets/1.png"
import maxtwo from "./assets/2.png"
import maxthree from "./assets/3.png"
import { useVisibilityContext } from "./context/VisibilityContextProvider";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isVisible = useVisibilityContext();


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 1000);

    return () => clearInterval(interval);
  })

  return (
    <div id="controls-carousel" className={`relative w-full ${isVisible ? "block" : "hidden"}`} data-carousel="static">
      <div className={`relative h-56 overflow-hidden rounded-lg md:h-96`}>
        <div className={`${currentSlide === 0 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
          <img src={maxone} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className={`${currentSlide === 1 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item="active">
          <img src={maxtwo} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className={`${currentSlide === 2 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
          <img src={maxthree} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span
          onClick={() => setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span
          onClick={() => setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

  )
}
