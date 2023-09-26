'use client'
import React from "react"
import useGetNavBarScroll from "../../hooks/useGetNavBarScroll"
import TopNavBar from "./TopNavBar/TopNavBar"
import BottomNavBar from "./BottomNavBar/BottomNavBar"
import NavBarStyles from "../../styles/NavBar/NavBar.module.css"

export default function NavBar(){

  const { navbarscroll } = useGetNavBarScroll()
  const navbarscrollStatus = navbarscroll > 30 ? "smallNavBar" : "normalNavBar"

  return(
    <nav className={`${NavBarStyles.NavBarContainer} ${NavBarStyles[navbarscrollStatus]}`}>
      <TopNavBar navbarscrollStatus={navbarscrollStatus}/>
      <BottomNavBar navbarscrollStatus={navbarscrollStatus}/>
    </nav>
  )
}