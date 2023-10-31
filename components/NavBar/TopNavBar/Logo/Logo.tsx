'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoStyles from "@/styles/NavBar/Logo.module.css"
import useGetNavBarScroll from "@/hooks/useGetNavBarScroll"
import logo from "@/public/CalandriaLogoWhite.png"

export default function Logo(){

  const { navbarscroll } = useGetNavBarScroll()
  const logoStatus = navbarscroll > 30 ? "smallLogo" : "normalLogo"

  return(
    <Link href="/" className={`${LogoStyles.logo} ${LogoStyles[logoStatus]}`}>
      {/* <Image
      src={logo}
      alt="logo"
      height={80}
      width={170}
      /> */}
    </Link>
  )
}