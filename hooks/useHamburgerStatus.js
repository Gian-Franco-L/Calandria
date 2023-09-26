import { useEffect, useState, useRef } from "react"

export default function useHamburgerStatus(){
  const [hamburgerStatus, setHamburgerStatus] = useState("none")
  const hamburgerStatusRef = useRef(null)

  useEffect(() =>{
    if(hamburgerStatus === "on"){
      if(hamburgerStatusRef.current) hamburgerStatusRef.current.style.display = 'inline-block'
    }else if(hamburgerStatus === "off"){
      setTimeout(()=>{
        if(hamburgerStatusRef.current) hamburgerStatusRef.current.style.display = 'none'
      }, 1000)
    }
  }, [hamburgerStatus])

  return { hamburgerStatus, setHamburgerStatus, hamburgerStatusRef }
}