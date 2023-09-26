import React from "react"
import MyLoaderItems from "@/loader/MyLoaderItems"
import SkeletonsStyles from "@/styles/Skeletons/Skeletons.module.css"

export default function Skeletons(){
 return(
    <div className={SkeletonsStyles.mainContainer}>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
      <div className={SkeletonsStyles.loaderContainer}><MyLoaderItems /></div>
    </div>
 )
}