'use client'

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"
import SingleArticle from "./SingleArticle/SingleArticle"
import Skeletons from "./Skeletons/Skeletons";
import { v4 as uuidv4 } from "uuid"
import ArticlesContainerStyles from "@/styles/Articles/ArticlesContainer.module.css"
import LoaderSpinner from "@/components/LoaderSpinner/LoaderSpinner"
import fetchArticles from "@/actions/fetchArticles";
import { useSearchParams } from 'next/navigation'


interface pageTypes{
  initialArticles:[
    {
      id: string,
      Name: string,
      Price: number,
      Date: number,
      Size: string,
      Img: string,
      Stuffing: string,
      Type: string,
      Status: string,
      Material: string
    }
  ]
}
export default function ArticlesContainer({initialArticles} :pageTypes){

  const [articles, setArticles] = useState(initialArticles)
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()

  const searchParams = useSearchParams()
  const search = searchParams.get('filter')

  async function loadMoreArticles(){
    const next = page + 1
    let newArticles

    if(search){
      newArticles = await fetchArticles(next, search)
    }else{
      newArticles = await fetchArticles(next)
    }

    if(newArticles?.length){
      setPage(next)
      setArticles(newArticles)
    }
  }

  useEffect(() =>{
    if(search){
      fetchArticles(1, search)
        .then(newArticles => setArticles(newArticles))
    }
  }, [search])

  useEffect(() =>{
    if(inView){
      loadMoreArticles()
    }
  }, [inView])

  return(
    <section className={ArticlesContainerStyles.articles}>
      {articles?.length
        ? articles.map((item: {
          id: string,
          Name: string,
          Price: number,
          Date: number,
          Size: string,
          Img: string,
          Stuffing: string,
          Type: string,
          Status: string,
          Material: string
        }) =>{
            return <SingleArticle 
                      item={item}
                      key={uuidv4()}
                    />
          })
        : <Skeletons />
      }
      <div className={ArticlesContainerStyles.spinner} ref={ref}>
        <LoaderSpinner />
      </div>
    </section>
  )
}