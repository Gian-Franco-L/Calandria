import { useEffect, useState } from "react"
import productService from "../services/product"

export default function useGetAllArticles(){
  const [allArticles, setAllArticles] = useState([{}]);

  useEffect(() =>{
    productService.getAll()
      .then((res) => {
        let articlesAux = []
        for(let i=0; i<5; i++){
          articlesAux.push(res[i])
        }
        setAllArticles(articlesAux)
      })
  }, [])

  return { allArticles }
}