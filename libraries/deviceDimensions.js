import { useWindowDimensions } from "react-native";
import React from 'react'




export function getDeviceWidth(){
    const window = useWindowDimensions()
    return(
        window.width
    )

}

export function getDeviceHeight(){
    const window = useWindowDimensions()
    return(
        window.height
    )
}