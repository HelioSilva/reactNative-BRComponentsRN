import React from 'react';
import { Platform, View, StatusBar } from 'react-native';
import { Content } from './styled';


export default function BrContent(props){



    if(Platform.OS=='android'){
      return(
        <Content {...props} statusBar={ props.safe ? StatusBar.currentHeight : 0}  >
          {props.children}
        </Content >
      );
    } else {
      return(
        <Content {...props} statusBar={ 20 }  >
          {props.children}
        </Content >
      );
    }
 



}