import React from "react"
import SearchPageStyle from "@/styles/SearchPage/SearchPage.module.css"
import { fetchSearchedArticles } from "@/actions/fetchArticles"
import SearchedItems from "@/components/SearchedItems/SearchedItems"

interface pageTypes{
  params: {id: string}
}
export default async function item({ params }: pageTypes){

  const initialArticles = await fetchSearchedArticles(1, params)

  return(
    <div className={SearchPageStyle.searchedContainer}>
      <h1>Resultados de búsqueda</h1>
      <SearchedItems 
        initialArticles={initialArticles}
        params={params}
      />
    </div>
  )
}