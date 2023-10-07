import { useState } from "react"

export default function useApearProductsBrandsLists(){
  const [apearProductList, setApearProductList] = useState("off")

  function productsListApear(){
    setApearProductList("on")
  }
  function productsListDesapear(){
    setApearProductList("off")
  }


  return {apearProductList, productsListApear, productsListDesapear}
}