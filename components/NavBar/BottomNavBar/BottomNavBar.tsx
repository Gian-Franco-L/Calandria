'use client'
import React from "react"
import Link from "next/link"
import BottomNavBarStyles from "../../../styles/NavBar/BottomNavBar.module.css"
import { GrFormDown } from "react-icons/gr"
import useApearProductsBrandsLists from "../../../hooks/useApearProductsBrandsLists"
import Search from "@/components/Search/Search"

export default function BottomNavBar(){

  const {apearProductList, productsListApear, productsListDesapear} = useApearProductsBrandsLists()

  const productListStatus = apearProductList === "on" ? "productListOn" : "productListOff"

  return(
    <>
      <div className={BottomNavBarStyles.mainContainerPc} onMouseLeave={() => (productsListDesapear())}>
        <ul className={BottomNavBarStyles.navList}>
          <li>
            <div onMouseEnter={() => (productsListApear())}>
              <Link href="/">Productos<GrFormDown /></Link>
            </div>
            <ul className={`${BottomNavBarStyles.productsList} ${BottomNavBarStyles[productListStatus]}`} onMouseLeave={productsListDesapear}>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/"><h5><li>Vuelta al cole</li></h5></Link>
                <Link href="/"><li>Mochilas</li></Link>
                <span><Link href="/"><li>- Jardín</li></Link></span>
                <span><Link href="/"><li>- Primaria</li></Link></span>
                <span><Link href="/"><li>- Secundaria</li></Link></span>
                <span><Link href="/"><li>- Moda urbana</li></Link></span>
                <Link href="/"><li>Cartucheras</li></Link>
                <Link href="/"><li>Bolsos y luncheras</li></Link>
                <Link href="/"><li>Botallas de agua</li></Link>
                <Link href="/"><li>Set de jardin personalizados</li></Link>
                <Link href="/"><li>Cintas identificadoras para ropa</li></Link>
                <Link href="/"><li>Uniforme San Cayetano</li></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/"><h5><li>Escritura</li></h5></Link>
                <Link href="/"><li>Lápices</li></Link>
                <span><Link href="/"><li>- Colores</li></Link></span>
                <span><Link href="/"><li>- Sacapuntas</li></Link></span>
                <span><Link href="/"><li>- Goma de borrar</li></Link></span>
                <Link href="/"><li>Boligrafos</li></Link>
                <span><Link href="/"><li>- Repuestos</li></Link></span>
                <Link href="/"><li>Marcadores</li></Link>
                <Link href="/"><li>Resaltadores</li></Link>
                <Link href="/"><li>Roller</li></Link>
                <span><Link href="/"><li>- Gel</li></Link></span>
                <span><Link href="/"><li>- Ball</li></Link></span>
                <Link href="/"><li>Microfibras</li></Link>
                <Link href="/"><li>Correctores</li></Link>
                <Link href="/"><li>Crayones</li></Link>
                <Link href="/"><li>Portaminas</li></Link>
                <span><Link href="/"><li>- Minas</li></Link></span>
                <Link href="/"><h5><li>Libros para colorear</li></h5></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/"><h5><li>Carpetas</li></h5></Link>
                <Link href="/"><li>N°3</li></Link>
                <Link href="/"><li>N°5</li></Link>
                <Link href="/"><li>N°6</li></Link>
                <Link href="/"><li>2x40</li></Link>
                <Link href="/"><li>3x40</li></Link>
                <Link href="/"><li>A4</li></Link>
                <Link href="/"><li>3 Solapas</li></Link>
                <Link href="/"><h5><li>Cuadernos</li></h5></Link>
                <Link href="/"><li>A4</li></Link>
                <Link href="/"><li>A5</li></Link>
                <Link href="/"><li>A6</li></Link>
                <Link href="/"><li>Escolares</li></Link>
                <Link href="/"><li>Económicos</li></Link>
                <Link href="/"><li>Cuaderno dibujo</li></Link>
                <Link href="/"><li><h5>Agendas</h5></li></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/"><h5><li>Calculadoras</li></h5></Link>
                <Link href="/"><li>Basicas</li></Link>
                <Link href="/"><li>Cientificas</li></Link>
                <Link href="/"><h5><li>Arte</li></h5></Link>
                <Link href="/"><li>Témperas</li></Link>
                <Link href="/"><li>Acuarelas</li></Link>
                <Link href="/"><li>Set de dibujo</li></Link>
                <Link href="/"><li>Brillantina</li></Link>
                <Link href="/"><li>Goma eva</li></Link>
                <Link href="/"><li>Pinceles</li></Link>
                <Link href="/"><li>Paletas</li></Link>
                <Link href="/"><li>Flautas</li></Link>
                <Link href="/"><h5><li>Geometría</li></h5></Link>
                <Link href="/"><li>Reglas</li></Link>
                <Link href="/"><li>Compás</li></Link>
                <Link href="/"><h5><li>Adhesivos</li></h5></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/"><h5><li>Hojas</li></h5></Link>
                <Link href="/"><li>Repuestos hojas escolares</li></Link>
                <Link href="/"><li>Separadores</li></Link>
                <Link href="/"><li>Etiquetas</li></Link>
                <Link href="/"><li>Folios</li></Link>
                <Link href="/"><li>Blocks</li></Link>
                <span><Link href="/"><li>- Recibos</li></Link></span>
                <Link href="/"><li>Resmas</li></Link>
                <Link href="/"><h5><li>Papeles y cartones</li></h5></Link>
                <Link href="/"><li>Acetatos</li></Link>
                <Link href="/"><h5><li>Pizarras</li></h5></Link>
                <Link href="/"><li>Imanes</li></Link>
                <Link href="/"><h5><li>Tableros</li></h5></Link>
                <Link href="/"><h5><li>Bastidores</li></h5></Link>
                <Link href="/"><h5><li>Masas</li></h5></Link>
                <Link href="/"><h5><li>Globos terráqueos</li></h5></Link>
                <Link href="/"><h5><li>Cortantes</li></h5></Link>
                <Link href="/"><h5><li>Baterias y pilas</li></h5></Link>
                <Link href="/"><li><h5>Un poco de todo</h5></li></Link>
              </div>
            </ul>
          </li>
          <li onMouseLeave={() => (productsListDesapear())}>
            <Link href="/contact">Contacto</Link>
          </li>
          <li onMouseLeave={() => (productsListDesapear())}>
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