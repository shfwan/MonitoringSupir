import React from "react"
import ContentLoader, { Rect, Circle } from "react-content-loader/native"

const MyLoader = (props) => (
    <ContentLoader 
        speed={1.5}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#dbdbdb"
        foregroundColor="#fcfcfc"
        {...props}>
        <Circle cx="63" cy="59" r="34" /> 
        <Rect x="119" y="36" rx="0" ry="0" width="218" height="16" /> 
        <Rect x="119" y="60" rx="0" ry="0" width="103" height="18" /> 
        <Circle cx="370" cy="58" r="11" />
    </ContentLoader>
)

export default MyLoader

