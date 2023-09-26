import { useEffect, useState } from "react"

export default function useGetNavBarScroll(){
  const [navbarscroll, setNavBarScroll] = useState(0)

  const handleScroll = () =>{
    const position = window.scrollY
    setNavBarScroll(position)
  }
  
  useEffect(() =>{
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return { navbarscroll }
}
