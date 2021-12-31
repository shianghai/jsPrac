import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {StyleSheet, View } from 'react-native'

export default function LikeIcon(){
    return(
        <View style = {styles.iconContainer}>
            <Ionicons name='heart-circle-outline' size={20}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        marginLeft: 3,
        marginRight: 3,

    }
})