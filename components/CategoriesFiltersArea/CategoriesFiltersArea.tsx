import React from "react";
import Link from "next/link";
import CategoriesFiltersAreaStyles from "@/styles/CategoriesFiltersArea/CategoriesFiltersArea.module.css"
import useGetNavBarScroll from "@/hooks/useGetNavBarScroll";
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
        <button className={CategoriesFiltersAreaStyles.closeCategoriesAreaButton} onClick={() => setCategoriesStatus("off")}>X</button>
        <h2>Filtros</h2>
      </div>
      <section className={CategoriesFiltersAreaStyles.categories}>
        <article className={CategoriesFiltersAreaStyles.categoriesTypes}>
          <h3>Categorias</h3>
          <Link href="#">Tipo1</Link>
          <Link href="#">Tipo2</Link>
          <Link href="#">Tipo3</Link>
        </article>
        <article>
          <h3>Filtrar por</h3>
          <p><input type="checkbox" />Filtro1</p>
          <p><input type="checkbox" />Filtro2</p>
          <p><input type="checkbox" />Filtro3</p>
          <p><input type="checkbox" />Filtro4</p>
          <p><input type="checkbox" />Filtro5</p>
          <p><input type="checkbox" />Filtro6</p>
        </article>
      </section>
    </div>
  )
}