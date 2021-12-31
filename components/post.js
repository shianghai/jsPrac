import AnnouncementPost from './posts/announcement'
import ReviewPost from './posts/review'
import React from 'react'
import ReevPost from './posts/reev'




export default function Post(props){

    if(props.postType == 'announcement'){
        return(
            <AnnouncementPost announceText = "these mofos are on baby trust me"/>
        )
    }
    else if(props.postType == 'disscussion'){
        return(
            <DiscussionPost/>
        )
    }

    else if(props.postType == 'review'){
        return(
            <ReviewPost reviewText = 'their doing good but they still need to put in more work'/>
        )
    }

    else if(props.postType == 'reev'){
        return(
            <ReevPost reevText = 'just look at that' reevPics = {!null} reevVideo= {!null}/>
        )
    }
    
            
    
}




