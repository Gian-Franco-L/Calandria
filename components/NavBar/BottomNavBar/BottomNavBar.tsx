'use client'
import React from "react"
import Link from "next/link"
import BottomNavBarStyles from "../../../styles/NavBar/BottomNavBar.module.css"
import { IoIosArrowDown } from "react-icons/io"
import useApearProductsBrandsLists from "../../../hooks/useApearProductsBrandsLists"
import Search from "@/components/Search/Search"

export default function BottomNavBar(){

  const {apearProductList, setApearProductList} = useApearProductsBrandsLists()

  const productListStatus = apearProductList === true ? "productListOn" : "productListOff"

  return(
    <>
      <div className={BottomNavBarStyles.mainContainerPc}>
        <ul className={BottomNavBarStyles.navList}>
          <li onClick={() => setApearProductList(prevState => prevState === true ? false : true)}>
            <div style={{textAlign: 'center'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>Productos<IoIosArrowDown className={BottomNavBarStyles.arrowDown}/></div>
            </div>
            <ul className={`${BottomNavBarStyles.productsList} ${BottomNavBarStyles[productListStatus]}`}>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/VueltaAlCole"><h5><li>Vuelta al cole</li></h5></Link>
                <Link href="/items"><li>Mochilas</li></Link>
                <span><Link href="/items"><li>- Jardín</li></Link></span>
                <span><Link href="/items"><li>- Primaria</li></Link></span>
                <span><Link href="/items"><li>- Secundaria</li></Link></span>
                <span><Link href="/items"><li>- Moda urbana</li></Link></span>
                <Link href="/items"><li>Cartucheras</li></Link>
                <Link href="/items"><li>Bolsos y luncheras</li></Link>
                <Link href="/items"><li>Set de jardin personalizados</li></Link>
                <Link href="/items"><li>Cintas identificadoras para ropa</li></Link>
                <Link href="/items"><li>Uniforme San Cayetano</li></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Escritura"><h5><li>Escritura</li></h5></Link>
                <Link href="/items"><li>Lápices</li></Link>
                <span><Link href="/items"><li>- Colores</li></Link></span>
                <span><Link href="/items"><li>- Sacapuntas</li></Link></span>
                <span><Link href="/items"><li>- Goma de borrar</li></Link></span>
                <Link href="/items"><li>Boligrafos</li></Link>
                <span><Link href="/items"><li>- Repuestos</li></Link></span>
                <Link href="/items"><li>Marcadores</li></Link>
                <Link href="/items"><li>Resaltadores</li></Link>
                <Link href="/items"><li>Roller</li></Link>
                <span><Link href="/items"><li>- Gel</li></Link></span>
                <span><Link href="/items"><li>- Ball</li></Link></span>
                <Link href="/items"><li>Microfibras</li></Link>
                <Link href="/items"><li>Correctores</li></Link>
                <Link href="/items"><li>Crayones</li></Link>
                <Link href="/items"><li>Portaminas</li></Link>
                <span><Link href="/items"><li>- Minas</li></Link></span>
                <Link href="/items/LibrosParaColorear"><h5><li>Libros para colorear</li></h5></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Carpetas"><h5><li>Carpetas</li></h5></Link>
                <Link href="/items"><li>N°3</li></Link>
                <Link href="/items"><li>N°5</li></Link>
                <Link href="/items"><li>N°6</li></Link>
                <Link href="/items"><li>2x40</li></Link>
                <Link href="/items"><li>3x40</li></Link>
                <Link href="/items"><li>A4</li></Link>
                <Link href="/items"><li>3 Solapas</li></Link>
                <Link href="/items/Cuadernos"><h5><li>Cuadernos</li></h5></Link>
                <Link href="/items"><li>A4</li></Link>
                <Link href="/items"><li>A5</li></Link>
                <Link href="/items"><li>A6</li></Link>
                <Link href="/items"><li>Escolares</li></Link>
                <Link href="/items"><li>Económicos</li></Link>
                <Link href="/items"><li>Cuaderno dibujo</li></Link>
                <Link href="/items/Agendas"><li><h5>Agendas</h5></li></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Calculadoras"><h5><li>Calculadoras</li></h5></Link>
                <Link href="/items"><li>Basicas</li></Link>
                <Link href="/items"><li>Cientificas</li></Link>
                <Link href="/items"><h5><li>Arte</li></h5></Link>
                <Link href="/items"><li>Témperas</li></Link>
                <Link href="/items"><li>Acuarelas</li></Link>
                <Link href="/items"><li>Set de dibujo</li></Link>
                <Link href="/items"><li>Brillantina</li></Link>
                <Link href="/items"><li>Goma eva</li></Link>
                <Link href="/items"><li>Pinceles</li></Link>
                <Link href="/items"><li>Paletas</li></Link>
                <Link href="/items"><li>Flautas</li></Link>
                <Link href="/items/Geometria"><h5><li>Geometría</li></h5></Link>
                <Link href="/items"><li>Reglas</li></Link>
                <Link href="/items"><li>Compás</li></Link>
                <Link href="/items/Adhesivos"><h5><li>Adhesivos</li></h5></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Hojas"><h5><li>Hojas</li></h5></Link>
                <Link href="/items"><li>Repuestos hojas escolares</li></Link>
                <Link href="/items"><li>Separadores</li></Link>
                <Link href="/items"><li>Etiquetas</li></Link>
                <Link href="/items"><li>Folios</li></Link>
                <Link href="/items"><li>Blocks</li></Link>
                <span><Link href="/items"><li>- Recibos</li></Link></span>
                <Link href="/items"><li>Resmas</li></Link>
                <Link href="/items/PapelesYCartones"><h5><li>Papeles y cartones</li></h5></Link>
                <Link href="/items"><li>Acetatos</li></Link>
                <Link href="/items/Pizarras"><h5><li>Pizarras</li></h5></Link>
                <Link href="/items"><li>Imanes</li></Link>
                <Link href="/items"><h5><li>Tableros</li></h5></Link>
                <Link href="/items/Bastidores"><h5><li>Bastidores</li></h5></Link>
                <Link href="/items/Masas"><h5><li>Masas</li></h5></Link>
                <Link href="/items/GlobosTerraqueos"><h5><li>Globos terráqueos</li></h5></Link>
                <Link href="/items/Cortantes"><h5><li>Cortantes</li></h5></Link>
                <Link href="/items/BateriasYPilas"><h5><li>Baterias y pilas</li></h5></Link>
                <Link href="/items"><h5><li>Fantasia</li></h5></Link>
                <Link href="/items/Otros"><li><h5>Otros</h5></li></Link>
              </div>
            </ul>
          </li>
          <li style={{textAlign: 'center'}}>
            <Link href="/contact">Contacto</Link>
          </li>
          <li style={{textAlign: 'center'}}>
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