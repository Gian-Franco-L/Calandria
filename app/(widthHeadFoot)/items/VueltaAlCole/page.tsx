import React from "react";
import Link from "next/link";
import ArticlesContainer from "@/components/ArticlesContainer/ArticlesContainer";
import ArticlesStyles from "@/styles/Articles/Articles.module.css"
import CategoriesFilters from "@/components/CategoriesFilters/CategoriesFilters";
import { fetchArticles } from "@/actions/fetchArticles";
import PriceTimeFilter from "@/components/PriceTimeFilter/PriceTimeFilter";
import FiltersCheckbox from "@/components/FiltersCheckbox/FiltersCheckbox";

export default async function VueltaAlCole(){

  const initialArticles = await fetchArticles(1, 'Precio<')

  return(
    <div className={ArticlesStyles.mainContainer}>
      <section className={ArticlesStyles.homeAndFilters}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Vuelta al cole</p>
        </article>
        <article>
          <PriceTimeFilter />
        </article>
      </section>
      <section className={ArticlesStyles.homeMobile}>
        <article className={ArticlesStyles.homeLink}>
          <Link href="/">Inicio</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <Link href="/items">Productos</Link>
          <p>&nbsp;&#62;&nbsp;</p>
          <p>Vuelta al cole</p>
        </article>
      </section>
      <section className={ArticlesStyles.categoriesAndFilersMobile}>
        <CategoriesFilters />
        <PriceTimeFilter />
      </section>
      <section className={ArticlesStyles.categoriesAndItems}>
        <article className={ArticlesStyles.categories}>
          <h3>Categorias</h3>
          <div className={ArticlesStyles.linksBorder}>
            <Link href="/items/VueltaAlCole/Mochilas">Mochilas</Link>
            <Link href="/items/VueltaAlCole/Mochilas/Jardin">- Jardin</Link>
            <Link href="/items/VueltaAlCole/Mochilas/Primaria">- Primaria</Link>
            <Link href="/items/VueltaAlCole/Mochilas/Secundaria">- Secundaria</Link>
            <Link href="/items/VueltaAlCole/Mochilas/ModaUrbana">- Moda urbana</Link>
            <Link href="/items/VueltaAlCole/Cartucheras">Cartucheras</Link>
            <Link href="/items/VueltaAlCole/BolsosLuncheras">Bolsos y luncheras</Link>
            <Link href="/items/VueltaAlCole/JardinPersonalizado">Set de jardin personalizado</Link>
            <Link href="/items/VueltaAlCole/CintasIdentificadoras">Cintas identificadoras para ropa</Link>
            <Link href="/items/VueltaAlCole/UniformeSC">Uniforme San Cayetano</Link>
          </div>
          <FiltersCheckbox />
        </article>
        <ArticlesContainer initialArticles={initialArticles}/>
      </section>
    </div>
  )
}