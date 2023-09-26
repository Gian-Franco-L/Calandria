import React from "react";
import SingleArticle from "./SingleArticle/SingleArticle"
import Skeletons from "./Skeletons/Skeletons";
import productService from "@/services/product"
import { v4 as uuidv4 } from "uuid"
import ArticlesContainerStyles from "@/styles/Articles/ArticlesContainer.module.css"

const getProducts = () =>{
  return productService.getAll()
}

export default async function ArticlesContainer(){

  const allArticles = await getProducts()

  return(
    <section className={ArticlesContainerStyles.articles}>
      {allArticles.length !== 0
        ? allArticles.slice(0, 10).map((item:any) =>{
            return <SingleArticle 
                      item={item}
                      key={uuidv4()}
                    />
          })
        : <Skeletons />
      }
    </section>
  )
}