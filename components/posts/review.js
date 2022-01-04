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

export default function ReviewPost(props){
    return(
    
        <View style={styles.rootContainer}>
            
            <View style = {styles.topContainer}>
                <View style={styles.nameContainer}>
                    <View style = {styles.proPicContainer}>
                        <ProfilePic width={30} height={30}/>
                    </View>
                    
                    <View style = {styles.usernameContainer}>
                        <UserName username = 'Enoch Daywalker' fontSize = {20} fontWeight='normal'/>
                        <View style={{top: -5}}><AtName atName = 'francis'/></View>
                    </View>
                    
                    
                </View>
                
                <View style={styles.ratingContainer}>
                    <View style={styles.ratedEntity}>
                        <ProfilePic width={30} height={30}/>
                        <UserName username = 'microsoft Inc' fontSize = {10} fontWeight='100'/>
                        
                    </View>
                   <Divider orientation ='vertical' />
                    <View style={styles.ratingView}>
                        <StarRating starRating = {4} starSize = {15}/>
                        <NumberRating numberRating = {'4.0/5.0'} numberSize={24}/>
                    </View>
                    
                </View>
            </View>
            
            
            <View style={styles.midContainer}>
                <Text style={styles.reviewText}>{props.reviewText}</Text>
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
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft: 30,
        marginTop: 5,
        marginBottom: 5
        
        

        
        
        
    },
    nameContainer: {
        flexDirection: 'row'
    }, 
    proPicContainer: {
        flexDirection: 'column'
    },
    reviewText: {
        fontSize: 20,
        
    },
    bottomContainer: {
        marginBottom: 1,
        marginLeft: 30
    },
    ratedEntity: {
        flexDirection: 'column',
        marginRight: 2,
        
    },
    ratingView: {
        flexDirection: 'column',
        marginLeft: 3,
        
        
    },
    usernameContainer : {
        flexDirection: 'column'
    }
    })

