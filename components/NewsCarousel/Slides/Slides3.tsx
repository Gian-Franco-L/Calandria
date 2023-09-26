import React from "react"
import Link from "next/link"
import SlidesStyles from "../../../styles/NewsCarousel/Slides.module.css"

const Slides3 = () =>{
    return(
      <section className={SlidesStyles.slide}>
        <h3>Articulo</h3>
        <img src="" alt="foto" />
        <span>
          <Link href="/items/123">
            <button className={SlidesStyles.seeButton}>Ver</button>
          </Link>
        </span>
      </section>
    )
}

export { Slides3 }