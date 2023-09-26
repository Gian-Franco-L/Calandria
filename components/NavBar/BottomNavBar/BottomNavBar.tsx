'use client'
import React from "react"
import Link from "next/link"
import BottomNavBarStyles from "../../../styles/NavBar/BottomNavBar.module.css"
import { GrFormDown } from "react-icons/gr"
import useApearProductsBrandsLists from "../../../hooks/useApearProductsBrandsLists"
import Search from "@/components/Search/Search"

interface pageTypes{
  navbarscrollStatus: string
}
export default function BottomNavBar({ navbarscrollStatus }: pageTypes){

  const {
    apearProductList,
    apearBrandsList,
    productsListApear,
    productsListDesapear,
    brandsListApear,
    brandsListDesapear} = useApearProductsBrandsLists()

  const productListStatus = apearProductList === "on" ? "productListOn" : "productListOff"
  const brandListStatus = apearBrandsList === "on" ? "brandListOn" : "brandListOff"

  return(
    <>
      <div className={BottomNavBarStyles.mainContainerPc}>
        <ul className={BottomNavBarStyles.navList} onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
          <li>
            <div onMouseEnter={() => (productsListApear(), brandsListDesapear())}>
              <Link href="/items">Productos</Link><GrFormDown />
            </div>
            <ul className={`${BottomNavBarStyles.productsList} ${BottomNavBarStyles[productListStatus]} ${BottomNavBarStyles[navbarscrollStatus]}`} onMouseLeave={productsListDesapear}>
              <Link href="/items"><li>Producto1</li></Link>
              <Link href="/items"><li>Producto2</li></Link>
              <Link href="/items"><li>Producto3...</li></Link>
            </ul>
          </li>
          <li>
            <div onMouseEnter={() => (brandsListApear(), productsListDesapear())}>
              <Link href="#">Marcas</Link><GrFormDown />
            </div>
            <ul className={`${BottomNavBarStyles.brandList} ${BottomNavBarStyles[brandListStatus]} ${BottomNavBarStyles[navbarscrollStatus]}`} onMouseLeave={brandsListDesapear}>
              <Link href="#"><li>Marca1</li></Link>
              <Link href="#"><li>Marca2</li></Link>
              <Link href="#"><li>Marca3...</li></Link>
            </ul>
          </li>
          <li onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
            <Link href="/contact">Contacto</Link>
          </li>
          <li onMouseLeave={() => (productsListDesapear(), brandsListDesapear())}>
            <Link href="#">Ofertas</Link>
          </li>
        </ul>
      </div>
      <div className={BottomNavBarStyles.mainContainerMobile}>
        <div className={BottomNavBarStyles.searchInput}>
          <Search />
        </div>
      </div>
    </>
  )
}