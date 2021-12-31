import React from 'react'
import {Image, View, StyleSheet} from 'react-native'


export default function ProfilePic(props){
    return(
        <View style = {styles.proPicContainer}>
            <Image source={require('../assets/favicon.png')}  style={{width: props.width, height: props.height, borderRadius: 50, borderWidth: 1}}/>
        </View>
        )
}

const styles = StyleSheet.create({
    proPicContainer: {
       
        
        
    }
})