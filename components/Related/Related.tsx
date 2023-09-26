'use client'
import React, { ReactNode, useState, useRef } from "react"
import NewsCarouselStyles from "../../styles/NewsCarousel/NewsCarousel.module.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { next, back } from "../NewsCarousel/Functions/CarouselFunctions"


interface pageTypes{
  children: ReactNode,
}
export default function Related({ children }:pageTypes){
  const [buttonsCarouselState, setButtonsCarouselState] = useState("true")
  const intervalCarousel = useRef(null)

  const slideCarousel = useRef(null)
  const slideButtons = useRef(null)

  return(
    <div className={NewsCarouselStyles.mainContainer}>
      <div className={NewsCarouselStyles.carousel} ref={intervalCarousel}>
        <h1>Productos relacionados</h1>
        <div className={NewsCarouselStyles.imgCarousel} ref={slideCarousel}>
          {children}
        </div>
        <div className={NewsCarouselStyles.buttonsCarousel} ref={slideButtons}>
          <div className={`${NewsCarouselStyles.button} ${NewsCarouselStyles.left}`} onClick={() => buttonsCarouselState === "true" && back(slideCarousel, setButtonsCarouselState)}>
            <FaArrowLeft className={NewsCarouselStyles.leftArrow} />
          </div>
          <div className={`${NewsCarouselStyles.button} ${NewsCarouselStyles.right}`} onClick={() => buttonsCarouselState === "true" && next(slideCarousel, setButtonsCarouselState)}>
            <FaArrowRight className={NewsCarouselStyles.rightArrow} />
          </div>
        </div>
      </div>
    </div>
  )
}