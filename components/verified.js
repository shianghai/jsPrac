import React from "react";
import {Ionicons} from '@expo/vector-icons'
import {View, StyleSheet} from 'react-native'


export default function Verified(){
    return(
        <View style={styles.verifiedContainer}>
            <Ionicons name='ios-checkmark-circle' size = {15}/>
        </View>
    )
    }

const styles = StyleSheet.create({
    verifiedContainer: {
        alignItems: 'center',
        marginLeft: 2,
        marginRight: 2,
        marginTop: 6,
        marginBottom: 2

        }
})