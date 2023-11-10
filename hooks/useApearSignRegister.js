import { useState } from "react"

export default function useApearSignRegister() {
  const [SignRegister, setSignRegister] = useState("off")

  return { SignRegister, setSignRegister }
}