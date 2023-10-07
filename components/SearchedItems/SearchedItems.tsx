'use client'

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"
import SearchPageStyle from "@/styles/SearchPage/SearchPage.module.css"
import { fetchSearchedArticles } from "@/actions/fetchArticles"
import SingleArticle from "@/components/ArticlesContainer/SingleArticle/SingleArticle"
import { v4 as uuidv4 } from "uuid"
import Skeletons from "@/components/ArticlesContainer/Skeletons/Skeletons"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

interface pageTypes{
  initialArticles: [{
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
  }],
  params: {id: string}
}
export default function SearchedItems({initialArticles, params}: pageTypes){

  const [articles, setArticles] = useState(initialArticles)
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()
  const [spinnerState, setSpinnerState] = useState(true)

  async function loadMoreArticles(){
    const next = page + 1
    let newArticles

    newArticles = await fetchSearchedArticles(next, params)

    if(newArticles?.length){
      setPage(next)
      setArticles(newArticles)
    }
  }

  useEffect(() =>{
    if(articles[articles.length-1] === undefined){
      setSpinnerState(false)
    }
    if(inView && spinnerState){
      loadMoreArticles()
    }
  }, [inView])

  return(
    <div style={{position: 'relative'}}>
      {initialArticles[0] === undefined && <h5>No hubo resultados para tu búsqueda</h5>}
      <div className={SearchPageStyle.searchedItems}>
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
            if(item !== undefined){
              return <SingleArticle 
                        item={item}
                        key={uuidv4()}
                      />
            }
            })
          : <Skeletons />
        }
      </div>
      {
        (initialArticles[0] !== undefined && spinnerState === true) 
          &&  <div className={SearchPageStyle.spinner} ref={ref}>
                <LoaderSpinner />
              </div>
      }
    </div>
  )
}