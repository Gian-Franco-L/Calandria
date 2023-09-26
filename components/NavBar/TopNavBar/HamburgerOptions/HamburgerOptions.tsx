import React from "react";
import HamburgerStyles from "@/styles/NavBar/Hamburger.module.css"
import useHamburgerStatus from "@/hooks/useHamburgerStatus"
import HamburgerArea from "@/components/HamburgerArea/HamburgerArea";

export default function HamburgerOptions(){

  const { hamburgerStatus, setHamburgerStatus, hamburgerStatusRef } = useHamburgerStatus()

  return(
    <>
      <div className={HamburgerStyles.mainContainer} onClick={() => setHamburgerStatus("on")}>
        <div className={HamburgerStyles.border}>
          <div className={HamburgerStyles.line1} />
          <div className={HamburgerStyles.line2} />
          <div className={HamburgerStyles.line3} />
        </div>
      </div>
      <div className={HamburgerStyles.hamburgerAreaContainer} ref={hamburgerStatusRef}>
        <div className={HamburgerStyles.hamburgerAreaBackground} onClick={() => setHamburgerStatus("off")} />
        <HamburgerArea
          hamburgerStatus={hamburgerStatus}
          setHamburgerStatus={setHamburgerStatus}
        />
      </div>
    </>
  )
}