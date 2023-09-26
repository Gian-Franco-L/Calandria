import { useState } from "react"

export default function useApearProductsBrandsLists(){
  const [apearProductList, setApearProductList] = useState("off")
  const [apearBrandsList, setApearBrandsList] = useState("off")

  function productsListApear(){
    setApearProductList("on")
  }
  function productsListDesapear(){
    setApearProductList("off")
  }
  function brandsListApear(){
    setApearBrandsList("on")
  }
  function brandsListDesapear(){
    setApearBrandsList("off")
  }

  return {apearProductList, apearBrandsList, productsListApear, productsListDesapear, brandsListApear, brandsListDesapear}
}