import React from "react"
import Image from "next/image"
import Link from "next/link"
import SingleArticleStyles from "@/styles/Articles/SingleArticles.module.css"
import ItemCant from "@/components/Cart/Items/ItemCant/ItemCant"

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
    <div  className={SingleArticleStyles.mainContainer}>
      <Link href={`/items/${item.id}`}>
        <Image
          src={item.Img} 
          alt="" 
          width={170}
          height={500}
        />
        <section>
          <h5>{item.Name}</h5>
          <p>${item.Price}</p>
        </section>
      </Link>
      <article>
        <div className={SingleArticleStyles.invisibleWall}/>
        <ItemCant />
        <button className={SingleArticleStyles.buyButton}>Comprar</button>
      </article>
    </div>
  )
}