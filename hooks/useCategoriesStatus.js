import { useEffect, useState, useRef } from "react"

export default function useCategoriesStatus(){
  const [categoriesStatus, setCategoriesStatus] = useState("none")
  const categoriesStatusRef = useRef(null)

  useEffect(() =>{
    if(categoriesStatus === "on"){
      if(categoriesStatusRef.current) categoriesStatusRef.current.style.display = 'inline-block'
    }else if(categoriesStatus === "off"){
      setTimeout(()=>{
        if(categoriesStatusRef.current) categoriesStatusRef.current.style.display = 'none'
      }, 1000)
    }
  }, [categoriesStatus])

  return { categoriesStatus, setCategoriesStatus, categoriesStatusRef }
}