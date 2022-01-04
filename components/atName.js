import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function AtName(props){
    return(
        <View >
            <Text>
            {'@' + props.atName}

            </Text>
        </View>
    )}