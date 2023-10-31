import React from "react"
import Image from "next/image"
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
    Img: string,
    id: string
  }
}
export default function SigleArticle({ item }: pageType){

  return(
    <div className={SingleArticleStyles.mainContainer}>
      <Image
        src={item.Img} 
        alt="" 
        width={170}
        height={500}
      />
      <div>
        <h3>{item.Name}</h3>
        <p>${item.Price}</p>
      </div>
      <section>
        <Link href={`/items/${item.id}`}></Link>
        <button>Comprar</button>
        <Link href={`/items/${item.id}`} className={SingleArticleStyles.seeButton}>
          <button>Ver</button>
        </Link>
      </section>
    </div>
  )
}