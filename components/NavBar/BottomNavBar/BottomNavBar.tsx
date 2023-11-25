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
                <Link href="/items/VueltaAlCole/Mochilas"><li>Mochilas</li></Link>
                <span><Link href="/items/VueltaAlCole/Mochilas/Jardin"><li>- Jardín</li></Link></span>
                <span><Link href="/items/VueltaAlCole/Mochilas/Primaria"><li>- Primaria</li></Link></span>
                <span><Link href="/items/VueltaAlCole/Mochilas/Secundaria"><li>- Secundaria</li></Link></span>
                <span><Link href="/items/VueltaAlCole/Mochilas/ModaUrbana"><li>- Moda urbana</li></Link></span>
                <Link href="/items/VueltaAlCole/Cartucheras"><li>Cartucheras</li></Link>
                <Link href="/items/VueltaAlCole/BolsosLuncheras"><li>Bolsos y luncheras</li></Link>
                <Link href="/items/VueltaAlCole/JardinPersonalizado"><li>Set de jardin personalizados</li></Link>
                <Link href="/items/VueltaAlCole/CintasIdentificadoras"><li>Cintas identificadoras para ropa</li></Link>
                <Link href="/items/VueltaAlCole/UniformeSC"><li>Uniforme San Cayetano</li></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Escritura"><h5><li>Escritura</li></h5></Link>
                <Link href="/items/Escritura/Lapices"><li>Lápices</li></Link>
                <span><Link href="/items/Escritura/Lapices/Colores"><li>- Colores</li></Link></span>
                <span><Link href="/items/Escritura/Lapices/Sacapuntas"><li>- Sacapuntas</li></Link></span>
                <span><Link href="/items/Escritura/Lapices/Gomas"><li>- Goma de borrar</li></Link></span>
                <Link href="/items/Escritura/Boligrafos"><li>Boligrafos</li></Link>
                <span><Link href="/items/Escritura/Boligrafos/Repuestos"><li>- Repuestos</li></Link></span>
                <Link href="/items/Escritura/Marcadores"><li>Marcadores</li></Link>
                <Link href="/items/Escritura/Resaltadores"><li>Resaltadores</li></Link>
                <Link href="/items/Escritura/Roller"><li>Roller</li></Link>
                <span><Link href="/items/Escritura/Roller/Gel"><li>- Gel</li></Link></span>
                <span><Link href="/items/Escritura/Roller/Ball"><li>- Ball</li></Link></span>
                <Link href="/items/Escritura/Microfibras"><li>Microfibras</li></Link>
                <Link href="/items/Escritura/Correctores"><li>Correctores</li></Link>
                <Link href="/items/Escritura/Crayones"><li>Crayones</li></Link>
                <Link href="/items/Escritura/Portaminas"><li>Portaminas</li></Link>
                <span><Link href="/items/Escritura/Portaminas/Minas"><li>- Minas</li></Link></span>
                <Link href="/items/LibrosParaColorear"><h5><li>Libros para colorear</li></h5></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Carpetas"><h5><li>Carpetas</li></h5></Link>
                <Link href="/items/Carpetas/N3"><li>N°3</li></Link>
                <Link href="/items/Carpetas/N5"><li>N°5</li></Link>
                <Link href="/items/Carpetas/N6"><li>N°6</li></Link>
                <Link href="/items/Carpetas/2x40"><li>2x40</li></Link>
                <Link href="/items/Carpetas/3x40"><li>3x40</li></Link>
                <Link href="/items/Carpetas/A4"><li>A4</li></Link>
                <Link href="/items/Carpetas/3solapas"><li>3 Solapas</li></Link>
                <Link href="/items/Cuadernos"><h5><li>Cuadernos</li></h5></Link>
                <Link href="/items/Cuadernos/A4"><li>A4</li></Link>
                <Link href="/items/Cuadernos/A5"><li>A5</li></Link>
                <Link href="/items/Cuadernos/A6"><li>A6</li></Link>
                <Link href="/items/Cuadernos/Escolares"><li>Escolares</li></Link>
                <Link href="/items/Cuadernos/Economicos"><li>Económicos</li></Link>
                <Link href="/items/Cuadernos/CuadernoDibujo"><li>Cuaderno dibujo</li></Link>
                <Link href="/items/Agendas"><li><h5>Agendas</h5></li></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Calculadoras"><li><h5>Calculadoras</h5></li></Link>
                <Link href="/items/Calculadoras/Basicas"><li>Basicas</li></Link>
                <Link href="/items/Calculadoras/Cientificas"><li>Cientificas</li></Link>
                <Link href="/items/Arte"><li><h5>Arte</h5></li></Link>
                <Link href="/items/Arte/Temperas"><li>Témperas</li></Link>
                <Link href="/items/Arte/Acuarelas"><li>Acuarelas</li></Link>
                <Link href="/items/Arte/SetDibujo"><li>Set de dibujo</li></Link>
                <Link href="/items/Arte/Brillantina"><li>Brillantina</li></Link>
                <Link href="/items/Arte/GomaEva"><li>Goma eva</li></Link>
                <Link href="/items/Arte/Pinceles"><li>Pinceles</li></Link>
                <Link href="/items/Arte/Paletas"><li>Paletas</li></Link>
                <Link href="/items/Arte/Flautas"><li>Flautas</li></Link>
                <Link href="/items/Geometria"><h5><li>Geometría</li></h5></Link>
                <Link href="/items/Geometria/Reglas"><li>Reglas</li></Link>
                <Link href="/items/Geometria/Compas"><li>Compás</li></Link>
                <Link href="/items/Adhesivos"><h5><li>Adhesivos</li></h5></Link>
              </div>
              <div className={BottomNavBarStyles.productSection}>
                <Link href="/items/Hojas"><h5><li>Hojas</li></h5></Link>
                <Link href="/items/Hojas/RepuestosEscolares"><li>Repuestos hojas escolares</li></Link>
                <Link href="/items/Hojas/Separadores"><li>Separadores</li></Link>
                <Link href="/items/Hojas/Etiquetas"><li>Etiquetas</li></Link>
                <Link href="/items/Hojas/Folios"><li>Folios</li></Link>
                <Link href="/items/Hojas/Blocks"><li>Blocks</li></Link>
                <span><Link href="/items/Hojas/Blocks/Recibos"><li>- Recibos</li></Link></span>
                <Link href="/items/Hojas/Resmas"><li>Resmas</li></Link>
                <Link href="/items/PapelesYCartones"><h5><li>Papeles y cartones</li></h5></Link>
                <Link href="/items"><li>Acetatos</li></Link>
                <Link href="/items/Pizarras"><h5><li>Pizarras</li></h5></Link>
                <Link href="/items/Pizarras/Imanes"><li>Imanes</li></Link>
                <Link href="/items/Tableros"><h5><li>Tableros</li></h5></Link>
                <Link href="/items/Bastidores"><h5><li>Bastidores</li></h5></Link>
                <Link href="/items/Masas"><h5><li>Masas</li></h5></Link>
                <Link href="/items/GlobosTerraqueos"><h5><li>Globos terráqueos</li></h5></Link>
                <Link href="/items/Cortantes"><h5><li>Cortantes</li></h5></Link>
                <Link href="/items/BateriasYPilas"><h5><li>Baterias y pilas</li></h5></Link>
                <Link href="/items/Fantasia"><h5><li>Fantasia</li></h5></Link>
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