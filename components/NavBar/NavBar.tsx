'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import useGetNavBarScroll from "../../hooks/useGetNavBarScroll"
import TopNavBar from "./TopNavBar/TopNavBar"
import BottomNavBar from "./BottomNavBar/BottomNavBar"
import NavBarStyles from "../../styles/NavBar/NavBar.module.css"
import logo from "@/public/CalandriaLogoWhite.png"

export default function NavBar(){

  const { navbarscroll } = useGetNavBarScroll()
  const navbarscrollStatus = navbarscroll > 30 ? "smallNavBar" : "normalNavBar"
  const logoStatus = navbarscroll > 30 ? "smallLogo" : "normalLogo"

  return(
    <nav className={`${NavBarStyles.NavBarContainer} ${NavBarStyles[navbarscrollStatus]}`}>
      <Link href="/" className={`${NavBarStyles.logo} ${NavBarStyles[logoStatus]}`}>
        <Image
        src={logo}
        alt="logo"
        layout="fill"
        />
      </Link>
      <TopNavBar navbarscrollStatus={navbarscrollStatus}/>
      <BottomNavBar />
    </nav>
  )
}