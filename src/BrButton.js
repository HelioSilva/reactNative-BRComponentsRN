import React from 'react';
import { TouchableOpacity,Text } from 'react-native';

function BrButton(props){

    return(
    <TouchableOpacity
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#1bb885',
            width:props.vw!='' ? props.vw : '100%' ,
            height: 40 ,
            color:'#fff',
            marginTop:10
        }}
    >
        <Text style={{color:'#ccc',fontSize:16}}>{props.title}</Text>
    </TouchableOpacity> 
    );

}

export default BrButton ;