import React from "react";
import Link from "next/link";
import CategoriesFiltersAreaStyles from "@/styles/CategoriesFiltersArea/CategoriesFiltersArea.module.css"
import useGetNavBarScroll from "@/hooks/useGetNavBarScroll";
import FiltersCheckbox from "../FiltersCheckbox/FiltersCheckbox";
import { MdOutlineCancel } from "react-icons/md"
import { GrFormDown } from "react-icons/gr"

interface Pagetypes{
  categoriesStatus: string,
  setCategoriesStatus: Function
}
export default function CategoriesFiltersArea({ categoriesStatus, setCategoriesStatus }: Pagetypes){

  const categoriesAreaStatus = categoriesStatus === "on" ? "openCategoriesArea" : "closeCategoriesArea"
  const { navbarscroll } = useGetNavBarScroll()
  const navbarscrollStatus = navbarscroll > 30 ? "smallNavBar" : "normalNavBar"

  return(
    <div className={`${CategoriesFiltersAreaStyles.categoriesAreaContainer} ${CategoriesFiltersAreaStyles[categoriesAreaStatus]} ${CategoriesFiltersAreaStyles[navbarscrollStatus]}`}>
      <div className={CategoriesFiltersAreaStyles.tittle}>
        <MdOutlineCancel className={CategoriesFiltersAreaStyles.closeCategoriesAreaButton} onClick={() => setCategoriesStatus("off")}/>
        <h2>Filtros</h2>
      </div>
      <section className={CategoriesFiltersAreaStyles.categories}>
        <article className={CategoriesFiltersAreaStyles.categoriesTypes}>
          <h3>Categorias</h3>
          <Link href="/items/VueltaAlCole">Vuelta al cole</Link>
          <Link href="/items/Escritura">Escritura</Link>
          <Link href="/items/LibrosParaColorear">Libros para colorear</Link>
          <Link href="/items/Carpetas">Carpetas</Link>
          <Link href="/items/Cuadernos">Cuadernos</Link>
          <Link href="/items/Agendas">Agendas</Link>
          <Link href="/items/Calculadoras">Calculadoras</Link>
          <Link href="/items/Arte">Arte</Link>
          <Link href="/items/Geometria">Geometría</Link>
          <Link href="/items/Adhesivos">Adhesivos</Link>
          <Link href="/items/Hojas">Hojas</Link>
          <Link href="/items/PapelesYCartones">Papeles y cartones</Link>
          <Link href="/items/Pizarras">Pizarras</Link>
          <Link href="/items/Tableros">Tableros</Link>
          <Link href="/items/Bastidores">Bastidores</Link>
          <Link href="/items/Masas">Masas</Link>
          <Link href="/items/GlobosTerraqueos">Globos terráqueos</Link>
          <Link href="/items/Cortantes">Cortantes</Link>
          <Link href="/items/BateriasYPilas">Baterias y pilas</Link>
          <Link href="/items/UnPocoDeTodo">Otros</Link>
        </article>
        <article>
          <FiltersCheckbox />
        </article>
      </section>
    </div>
  )
}