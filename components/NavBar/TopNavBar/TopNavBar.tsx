import React from "react"
import TopNavBarStyles from "@/styles/NavBar/TopNavBar.module.css"
import Logo from "./Logo/Logo"
import ProfileCartIcons from "./ProfileCartIcons/ProfileCartIcons"
import Search from "@/components/Search/Search"
import HamburgerOptions from "./HamburgerOptions/HamburgerOptions"


interface pageTypes{
  navbarscrollStatus: string
}
export default function TopNavBar ({ navbarscrollStatus }: pageTypes){
  return(
    <div className={TopNavBarStyles.topNavBarContainer}>
      {/* {
        typeof window !== 'undefined' &&  !window.matchMedia("(max-width: 991px)").matches
          &&  <>
                <Logo />
                <Search />
                <ProfileCartIcons navbarscrollStatus={navbarscrollStatus}/>
              </>
      }
      {
        typeof window !== 'undefined' &&  window.matchMedia("(max-width: 991px)").matches
          &&  <>
                <HamburgerOptions />
                <Logo />
                <ProfileCartIcons navbarscrollStatus={navbarscrollStatus}/>
              </>
      } */}
      <HamburgerOptions />
      <Logo />
      <div className={TopNavBarStyles.searchInput}>
        <Search />
      </div>
      <ProfileCartIcons navbarscrollStatus={navbarscrollStatus}/>
    </div>
  )
}