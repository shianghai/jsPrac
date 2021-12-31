import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { globalStyles } from '../../assets/global/styles'
import Post from '../../components/post'
import Rating from '../../components/rating'


export default function HomeScreen(){
    return(
        <ScrollView>
            <Post postType = 'announcement'/>
            <Post postType = 'review'/>
            <Post postType = 'reev'/>
            
        </ScrollView>
        
    
        
    )}