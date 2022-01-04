import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import UserName from '../username'
import Verified from '../verified'
import StarRating from '../rating'
import { NumberRating } from '../rating'
import { CreateDurationFunc, DisplayDurationFunc } from '../../libraries/luxonDateTime'
import LikeIcon from '../like'
import RepostIcon from '../repost'
import CommentIcon from '../comment'
import ProfilePic from '../profile'
import  {Divider} from 'react-native-elements'
import AtName from '../atName'



const duration = CreateDurationFunc(0, 0, 0, 5, 0)
export default function AnnouncementPost(props){
    return(
    
        <View style={styles.rootContainer}>
            
            <View style = {styles.topContainer}>
                <View style={styles.nameContainer}>
                    <View style = {styles.proPicContainer}>
                        <ProfilePic width = {30} height={30}/>
                    </View>
                    
                    <UserName username = 'shanghai Inc' fontSize = {20} fontWeight='normal'/>
                    <Verified/>
                </View>
                 
                <View style={styles.ratingContainer}>
                    <View style = {{marginRight: 1, top: -1}}><AtName atName = 'windows'/></View>
                    <StarRating starRating = {5} starSize={10}/>
                    <NumberRating numberRating = {'5.0/5.0'} numberSize = {10}/>
                </View>
            </View>
            
            
            <View style={styles.midContainer}>
                <Text style={styles.announcementText}>{props.announceText}</Text>
            </View>
            

            <View style={styles.bottomContainer}>
                <View style={styles.bottomLeftContainer}>
                    <DisplayDurationFunc duration = {duration.toFormat("s 'seconds ago'")}/>
                </View>


                <View style={styles.bottomRightContainer}>
                        <CommentIcon/>
                        <LikeIcon/>
                        <RepostIcon/>
                </View>
            </View>
            
            
            <Divider orientation = 'horizontal'/>
        </View>

       
    )
}
    
    


const styles = StyleSheet.create({
    rootContainer: {
        
        
        borderColor: 'gray',
        margin: 5,
         
        
        

        

    },
    topContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },

    midContainer: {
        
        
        
        marginBottom: 3,
        
        marginTop:1,
        marginRight: 3,
        marginLeft: 30

    },

    bottomLeftContainer: {
        top: 20,
        flexDirection: 'row',
        
        

    },
    bottomRightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
        
        
    },

    ratingContainer: {
        flexDirection: 'row',
        left: 30,
        top: -15,
        
        
        
    },
    nameContainer: {
        flexDirection: 'row'
    }, 
    proPicContainer: {
        flexDirection: 'column'
    },
    announcementText: {
        fontSize: 20,
        top: -5,
        
        
    },
    bottomContainer: {
        marginBottom: 1,
        marginLeft: 30
    }
    })

