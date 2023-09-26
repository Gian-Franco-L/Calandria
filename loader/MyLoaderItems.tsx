import React from "react"
import ContentLoader from "react-content-loader"

export default function MyLoaderItems(props:any){
  return(
    <ContentLoader 
        speed={3}
        width={210}
        height={370}
        viewBox="0 0 200 370"
        backgroundColor="#b3b3b3"
        foregroundColor="#ffffff"
        {...props}
      >
        <rect x="30" y="16" rx="0" ry="0" width="148" height="259" /> 
        <rect x="54" y="280" rx="0" ry="0" width="100" height="14" /> 
        <rect x="79" y="305" rx="0" ry="0" width="50" height="14" />
      </ContentLoader>
  )
}