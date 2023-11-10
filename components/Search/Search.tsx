'use client'

import React from "react"
import { BsSearch } from "react-icons/bs"
import SearchStyles from "@/styles/Search/Search.module.css"
import useGetNavBarScroll from "@/hooks/useGetNavBarScroll"

export default function Search(){

  const { navbarscroll } = useGetNavBarScroll()
  const inputStatus = navbarscroll > 30 ? "smallNavBarInput" : "normalNavBarInput"
  const searchLogoStatus = navbarscroll > 30 ? "smallLogo" : "normalLogo"

  return(
      <>
        <input className={`${SearchStyles.input} ${SearchStyles[inputStatus]}`} placeholder="Que estás buscando?" />
        <div className={`${SearchStyles.searchIcon} ${SearchStyles[searchLogoStatus]}`}>
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