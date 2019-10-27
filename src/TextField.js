import React from 'react';
import { TextInput } from 'react-native';


function TextField(props){

    return <TextInput
    
        placeholder={props.hint}
        placeholderTextColor= '#666'
        style={{
            padding: 5 ,
            margin : 5 ,
            backgroundColor:'rgba(255,255,255,0.5)', 
            width:props.vw!='' ? props.vw : '100%' ,
            height:40,   
            borderRadius: 3 ,
            fontSize: 16,
            color: '#011'
        }}
    />;



}

export default TextField ;