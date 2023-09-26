import React from "react"
import Link from "next/link"
import SingleArticleStyles from "@/styles/Articles/SingleArticles.module.css"

interface pageType{
  item: {
    Name: string,
    Price: number,
    Date: number,
    Size: string,
    Material: string,
    Stuffing: string,
    Img: string
  }
}
export default function SigleArticle({ item }: pageType){
  return(
    <div className={SingleArticleStyles.mainContainer}>
      <img src={item.Img} alt="" />
      <div>
        <h3>{item.Name}</h3>
        <p>${item.Price}</p>
      </div>
      <section>
        <Link href="/items/123"></Link>
        <button>Comprar</button>
        <Link href="/items/123" className={SingleArticleStyles.seeButton}>
          <button>Ver</button>
        </Link>
      </section>
    </div>
  )
}