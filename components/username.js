import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

export default function UserName(props){
    return(
        <View>
            <Text style = {{fontSize: props.fontSize, fontWeight: props.fontWeight,}}>
                {props.username}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    usernameText: {
        

    }
})