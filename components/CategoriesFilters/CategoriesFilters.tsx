'use client'
import React from "react";
import CategoriesFilterStyles from "@/styles/CategoriesFilter/CategoriesFilter.module.css"
import useCategoriesStatus from "@/hooks/useCategoriesStatus"
import CategoriesFiltersArea from "../CategoriesFiltersArea/CategoriesFiltersArea";

export default function CategoriesFilters(){

  const { categoriesStatus, setCategoriesStatus, categoriesStatusRef } = useCategoriesStatus()

  return(
    <article>
      <button className={CategoriesFilterStyles.filterWord} onClick={() => setCategoriesStatus("on")}>
        Filtrar
      </button>
      <div className={CategoriesFilterStyles.categoriesAreaContainer} ref={categoriesStatusRef}>
        <div className={CategoriesFilterStyles.categoriesAreaBackground} onClick={() => setCategoriesStatus("off")} />
        <CategoriesFiltersArea
          categoriesStatus={categoriesStatus}
          setCategoriesStatus={setCategoriesStatus}
        />
      </div>
    </article>
  )
}