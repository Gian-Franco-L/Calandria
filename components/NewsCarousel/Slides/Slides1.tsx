import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlidesStyles from "../../../styles/NewsCarousel/Slides.module.css"

const Slides1 = () =>{
    return(
      <Link href="/items" className={SlidesStyles.slide}>
        <h3>Articulo</h3>
        {/* <Image src="" alt="foto" /> */}
        <div className={SlidesStyles.img}></div>
      </Link>
    )
}

export { Slides1 }