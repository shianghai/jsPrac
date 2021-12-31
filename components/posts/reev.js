import * as React from 'react'
import RepostIcon from '../repost'
import { getDeviceHeight, getDeviceWidth } from '../../libraries/deviceDimensions'
import { Image, Text, View, StyleSheet } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import video from '../../assets/burn_video.mp4'





export default function ReevPost(props){
    let postHeight = getDeviceHeight-5
    let postWidth = getDeviceWidth - 5
    
    if(props.reevPics != null && props.reevText != null && props.reevVideo != null){
        //text with pictures and videos
        return(
            <View style={styles.postContainer}>
                <View style={styles.textContainer}>
                    <Text >
                        {props.reevText}
                    </Text>
                </View>
                

                <View style={styles.imageContainer}>
                    
                        <Image source={require('../../assets/burnt_phone.jpg')} height={40} width={40}/>
                    
                </View>
                
                <View style={styles.videoContainer}>
                <VideoPlayer
                    video={require('../../assets/burn_video.mp4')}
                    videoWidth={300}
                    videoHeight={300}
                    
                />
                </View>
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
        height: 30,
        width: 30,
        borderRadius: 1,

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
    }


})