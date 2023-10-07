import React from "react";
import SearchPageStyle from "@/styles/SearchPage/SearchPage.module.css"

export default function Search(){
  return(
    <div className={SearchPageStyle.mainContainer}>
      <h1>No hubo resultados para tu búsqueda</h1>
    </div>
  )
}