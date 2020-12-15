import React, {useState} from 'react'



const ChatList = (props) => {

    return ( 
        <div style={{overflow:"scroll", height:"550px"}} >
         {props.chatlist}
        </div>
    )
}

export default ChatList