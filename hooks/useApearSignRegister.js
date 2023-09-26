import { useState } from "react"

export default function useApearSignRegister(){
  const [apearSignRegister, setApearSignRegister] = useState("off")

  function signRegisterApear(){
    setApearSignRegister("on")
  }
  function signRegisterDesapear(){
    setApearSignRegister("off")
  }

  return {apearSignRegister, signRegisterApear, signRegisterDesapear}
}