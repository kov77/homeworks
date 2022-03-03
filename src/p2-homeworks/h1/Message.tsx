import React from 'react'
import classes from "./Message.module.css"
type messageData = {
    avatar: string,
    name: string,
    message: string,
    time: string

}

function Message(props:messageData) {
    return (
        <div className={classes.message}>
            <div className={classes.message__avatar}><img src={props.avatar} alt="avatar"/></div>
            <div className={classes.message__block}>
                <div className={classes.message__name}>{props.name}</div>
                <div className={classes.message__text}>{props.message}</div>
                <div className={classes.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
