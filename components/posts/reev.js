import * as React from 'react'
import RepostIcon from '../repost'
import { getDeviceHeight, getDeviceWidth } from '../../libraries/deviceDimensions'
import { Image, Text, View, StyleSheet } from 'react-native'
import video from '../../assets/burn_video.mp4'
import ProfilePic from '../profile'
import UserName from '../username'
import Verified from '../verified'
import AtName from '../atName'
import  {Divider} from 'react-native-elements'




export default function ReevPost(props){
    let postHeight = getDeviceHeight-5
    let postWidth = getDeviceWidth - 5
    
    if(props.reevPics != null && props.reevText != null && props.reevVideo != null){
        //text with pictures and videos
        return(
            <View style={styles.postContainer}>
                <View style={styles.nameContainer}>
                    <View style = {styles.proPicContainer}>
                        <ProfilePic width={30} height={30}/>
                    </View>
                    
                    <View style = {styles.usernameContainer}>
                        <UserName username = 'Enoch Daywalker' fontSize = {20} fontWeight='normal'/>
                        <View style={{top: -5}}><AtName atName = 'francis'/></View>
                    </View>
                    
                    
                </View>
                <View style={styles.textContainer}>
                    <Text >
                        {props.reevText}
                    </Text>
                </View>
                

                <View style={styles.imageContainer}>
                    
                        <Image source={require('../../assets/burnt_phone.jpg')} style={{resizeMode:'cover', height:'100%', width:'110%', }}/>
                    
                </View>
                
                <View style={styles.videoContainer}>
                
                </View>
                 <Divider orientation='horizontal'/>
            </View>
           
        )
        
    }
    else if(props.reevText !=null && props.reevPics == null && props.reevVideos ==null){
        //text only
    }
    else if(props.reevText != null && props.reevPics ==null && props.reevVideos != null){
        //text with videos
    }
    else if(props.reevText != null && props.reevPics != null && props.reevVideos == null){
        //text with pictures
    }
    else if(props.reevText == null && props.reevPics!= null && props.reevVideos ==null){
        //pictures only
    }
    else if(props.reevText ==null && props.reevPics == null && props.reevVideos != null){
        //videos only
    }
    else if(props.reevText ==null && props.reevPics != null && props.reevVideos != null){
        //pictures with videos
    }
}


const styles = StyleSheet.create({
    postContainer: {
        height: 300,
        width: 300,
        borderRadius: 1,
        borderColor: 'gray'
    },

    imageContainer: {
        
        height: 170,
        width: 280,
        borderRadius: 1,
        marginLeft: 30,

    },

    videoContainer: {
        height: 300,
        width: 300,
        borderRadius: 1,
    },
    
    textContainer: {
        height: 20,
        width:200,
        borderRadius: 1,
        marginLeft: 30,
    },
    nameContainer: {
        flexDirection: 'row'
    }, 
    proPicContainer: {
        flexDirection: 'column'
    },


})