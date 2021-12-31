import { StyleSheet, Text } from "react-native"

export function Link({props}){
    return(
        <View style = {styles.linkContainer}>
            <Text style={styles.linkText}>
                {props.linkText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    linkContainer: {

    },

    linkText: {
        
    }
})