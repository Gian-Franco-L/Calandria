'use client'

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"
import SingleArticle from "./SingleArticle/SingleArticle"
import Skeletons from "./Skeletons/Skeletons";
import { v4 as uuidv4 } from "uuid"
import ArticlesContainerStyles from "@/styles/Articles/ArticlesContainer.module.css"
import LoaderSpinner from "@/components/LoaderSpinner/LoaderSpinner"
import { fetchArticles } from "@/actions/fetchArticles";
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
  const [spinnerState, setSpinnerState] = useState(true)

  const searchParams = useSearchParams()
  const searchFilter = searchParams.get('filter')
  const searchItemTypes = searchParams.get('itemTypes')

  async function loadMoreArticles(){
    const next = page + 1
    let newArticles

    if(searchFilter || searchItemTypes){
      newArticles = await fetchArticles(next, searchFilter, searchItemTypes)
    }else{
      newArticles = await fetchArticles(next)
    }

    if(newArticles?.length){
      setPage(next)
      setArticles(newArticles)
    }
  }

  useEffect(() =>{
    setSpinnerState(true)
    fetchArticles(1, searchFilter, searchItemTypes)
        .then(newArticles => setArticles(newArticles))
  }, [searchFilter, searchItemTypes])

  useEffect(() =>{
    if(articles[articles.length-1] === undefined && !articles?.length){
      setSpinnerState(false)
    }
    if(inView && spinnerState){
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
      {
        spinnerState === true
          &&  <div className={ArticlesContainerStyles.spinner} ref={ref}>
                <LoaderSpinner />
              </div>
      }
    </section>
  )
}