import {Text, StyleSheet, View} from 'react-native'
import { DateTime, Duration } from 'luxon'
import React from 'react'

export function createdAtFunc(){
    const createdAt = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)

    return (createdAt)
}

export function DisplayCreatedAt(props){
    return(
        <View>
            <Text>
                {props.createdAt}
            </Text>
        </View>
    )
}

export function CreateDateTimeObjectFunc(props){
    const dateTime = DateTime.fromObject({year: props.year, month: props.month, day: props.day, hour:props.hour, minute:props.minute, 
                                         second: props.second}, {zone: props.zone})

    return(dateTime)
}

export function DateTimeToStringFunc(props){
    const stringDateTime = DateTime.toString(props.dateTime)
    return(stringDateTime)
}

export function DateTimeFromIsoFunc(props){
    const isoDateTime = DateTime.fromISO(props.stringDateTime)

    return(
        isoDateTime
    )
}

export function CreateDurationFunc(days, hours,  minutes, seconds, milliseconds){
    const duration = Duration.fromObject({days: days, hours:hours, minutes:minutes, 
                                            seconds:seconds, milliseconds:milliseconds})

    return(duration)
}

export function getTimeFunc(props){
    return(
        props.dateTime.toISOTime({includeOffset: false})
    )
}

export function getDateTimeComponentsfunc(props){
    switch(props.dateTimeComponent){
        case 'hour':
            return(props.dateTime.hour)
        case 'second':
            return(props.dateTime.second)
        case 'minute':
            return(props.dateTime.minute)
        case 'day':
            return(props.dateTime.day)
        case 'month':
            return(props.dateTime.month)
        case 'year':
            return(props.dateTime.year)
    }
}

export function AddSubtractDurationFunc(props){
    let totalDuration
    if(props.type === 'add'){
       totalDuration =  props.dateTime.plus(props.duration)
    }

    else{
       totalDuration =  props.dateTime.plus(props.duration)
    }

    return(totalDuration)
}

export function GetDurationComponents(props){
    switch(props.componentName){
        case 'hours':
            return(props.duration.hours)
        
        case 'minutes':
            return(props.duration.minutes)

        case 'seconds':
            return(props.duration.seconds)

        case 'days':
            return(props.duration.days)
    }


}

export function TimeKeyWords(props){
    switch(props.timeKeyword){
        case 'seconds':
            return('seconds ago')
        
        case 'minutes':
            return('minutes ago')

        case 'hours':
            return('hours ago')

        case 'days':
            return('days ago')

        case 'weeks':
            return('weeks ago')
        
        case 'second':
            return('second ago')
        
        case 'minute': 
            return('minute ago')

        case 'hour':
            return('hour ago')
        
        case 'day':
            return('day ago')

        case 'week':
            return('week ago')
        case 'now':
            return('just now')

    }
}


export function DisplayDurationFunc(props){
    return(
        <View>
            <Text style ={{fontSize: 10}}>
                {props.duration}
            </Text>
        </View>
    )
}

export function SetTimeZone(props){
    return(props.duration.SetZone(props.timeZone))
}

export function DisplayDateTimeObject(){
    return(
        <View>
            <Text>
                {props.dateTime}
            </Text>
        </View>
    )
}

export function DisplayStringDateTime(props){
    return(
        <View>
            <Text>
                {props.stringDateTime}
            </Text>
        </View>
    )
}

export function DisplayIsoDateTime(){
    return(
        <View>
            <Text>
                {props.isoDateTime}
            </Text>
        </View>
    )
}

export function DisplayDuration(props){
    if(props.duration.milliseconds < 60 && props.duration.seconds == 0 && props.duration.hours == 0 && props.duration.days == 0 && 
        props.duration.minutes == 0 ){
            return(
                <View>
                    <Text>
                        {props.duration} <TimeKeyWords timeKeyword = 'Now'/>
                    </Text>
                </View>
            )
        }
    else if(props.duration.milliseconds < 60 && props.duration.seconds < 60 && props.duration.hours == 0 && props.duration.days == 0 && 
            props.duration.minutes == 0 ){
                return(
                    <View>
                        <Text>
                            {props.duration}<TimeKeyWords timeKeyword = 'seconds'/>
                        </Text>
                    </View>
                )
            }

    else if(props.duration.milliseconds < 60 && props.duration.seconds < 60 && props.duration.hours == 0 && props.duration.days == 0 && 
                props.duration.minutes == 1 ){
                     return(
                         <View>
                             <Text>
                                 {props.duration}<TimeKeyWords timeKeyword = 'minute'/>
                            </Text>
                            </View>
                        )
                    }
        
    else if(props.duration.milliseconds < 60 && props.duration.seconds < 60 && props.duration.hours == 0 && props.duration.days == 0 && 
            props.duration.minutes < 60){
                 return(
                     <View>
                         <Text>
                             {props.duration}<TimeKeyWords timeKeyword = 'minutes'/>
                        </Text>
                        </View>
                    )
                }
    else if(props.duration.milliseconds < 60 && props.duration.seconds < 50 && props.duration.hours == 1 && props.duration.days == 0 && 
                    props.duration.minutes < 60 ){
                         return(
                             <View>
                                 <Text>
                                     {props.duration}<TimeKeyWords timeKeyword = 'hour'/>
                                </Text>
                                </View>
                            )
                        }

    else if(props.duration.milliseconds < 60 && props.duration.seconds < 60 && props.duration.hours < 25  && props.duration.days == 0 && 
                            props.duration.minutes < 60 ){
                                 return(
                                    <View>
                                        <Text>
                                             {props.duration}<TimeKeyWords timeKeyword = 'hours'/>
                                        </Text>
                                    </View>
                                    )
                                }
     else if(props.duration.milliseconds < 60 && props.duration.seconds < 60 && props.duration.hours < 25 && props.duration.days == 1 && 
          props.duration.minutes < 60 ){
                                         return(
                                             <View>
                                                 <Text>
                                                     {props.duration}<TimeKeyWords timeKeyword = 'day'/>
                                                </Text>
                                                </View>
                                            )
                                        }
                          
    else if(props.duration.milliseconds > 0 && props.duration.seconds < 59 && props.duration.hours == 0 && props.duration.days > 1 && 
                                            props.duration.minutes > 1 ){
                                                 return(
                                                     <View>
                                                         <Text>
                                                             {props.duration}<TimeKeyWords timeKeyword = 'days'/>
                                                        </Text>
                                                        </View>
                                                    )
                                                }

                                                else if(props.duration.milliseconds > 0 && props.duration.seconds < 59 && props.duration.hours == 0 && props.duration.days == 0 && 
                                                    props.duration.minutes > 1 ){
                                                         return(
                                                             <View>
                                                                 <Text>
                                                                     {props.duration}<TimeKeyWords timeKeyword = 'minutes'/>
                                                                </Text>
                                                                </View>
                                                            )
                                                        }

    
}