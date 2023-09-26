import React from "react"
import { BsSearch } from "react-icons/bs"
import SearchStyles from "@/styles/Search/Search.module.css"

export default function Search(){
  return(
      <>
        <input className={SearchStyles.input} placeholder="Que estás buscando?" />
        <div className={SearchStyles.searchIcon}>
          <BsSearch className={SearchStyles.bsIconSearch}/>
        </div>
        {/* {
          searchedArticles
            ? <CrossIcon onClick={() => clearSearch(setSearchedArticles)}><AiIconClose /></CrossIcon>
            : <SearchIcon><BsIconSearch /></SearchIcon>
        } */}
      </>
  )
}