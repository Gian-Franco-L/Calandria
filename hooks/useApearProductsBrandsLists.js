import { useState } from "react"

export default function useApearProductsBrandsLists() {
  const [apearProductList, setApearProductList] = useState(false)


  return { apearProductList, setApearProductList }
}