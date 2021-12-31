import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons' 

export default function StarRating(props){
    var starSize = props.starSize;
    switch (props.starRating) {
        case 1:
            return(
            <View style = {styles.starContainer}>
                <Ionicons name='star' size={starSize} />
            </View>
            )

        case 2:
            return(<View style = {styles.starContainer}>
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
            </View>
            )
        case 3:
                return(<View style = {styles.starContainer}>
                    <Ionicons name='star' size={starSize} />
                    <Ionicons name='star' size={starSize} />
                    <Ionicons name='star' size={starSize} />
                </View>)
        case 4:
            return(<View style = {styles.starContainer}>
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
            </View>)
        case 5:
            return(<View style = {styles.starContainer}>
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
                <Ionicons name='star' size={starSize} />
            </View>)
        
    }
}


export function NumberRating(props){
    var numberSize = props.numberSize
    return(
        <View style={styles.numberContainer}>
            <Text style = {{fontSize: numberSize}}>
                {props.numberRating}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
        marginRight: 2,
        marginLeft: 2,
        

    },
    numberContainer: {
        marginRight: 2,
        marginLeft: 2,
        
    }

})

