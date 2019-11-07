import React from 'react';
import { StyleSheet,SafeAreaView ,Platform, View } from 'react-native';

export default function BrContent(props){

  const {
    middle,
    primary,
    botton,
    top,
    flex,
    row,
    bg,
    style,
    alRigth,
    vh,
    vw,
    alingSpace
  } =  props   ;

  const styleBook = [
    middle     && styles.middle,
    primary    && styles.primary,
    botton     && styles.botton,
    top        && styles.top,
    flex       && { flex: flex === true ? 1 : flex },
    row        && styles.row,
    bg        && {backgroundColor:bg},
    alRigth   && styles.alRigth,
    vw        && {width: vw},
    vh        && {height: vh},
    alingSpace && styles.alingSpace
  ];

  if(props.safe){
    if(Platform.OS=='android'){
      return(
        <View  style={[styleBook,style,styles.safeAndroid]}  >
          {props.children}
        </View >
      );
    }else{
      return(
        <SafeAreaView  style={styleBook}>
          {props.children}
        </SafeAreaView >
      );
    }    

  }else{

    return(
      <View  style={[styleBook,style]}>
        {props.children}
      </View>
    );

  } 
}

export const styles = StyleSheet.create({
  safeAndroid:{
    paddingTop : 23
  },  
  flex:{
    display:'flex'
  },
  primary:{
    backgroundColor: '#7dc6f0',
    color : '#fff'
  },  
  row: {
    flexDirection: 'row',
  },
  middle: {   
    alignItems: 'center',
    justifyContent: 'center',
  },
  botton:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end'
  },
  top:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  alRigth:{
    display:'flex',
    alignItems:'flex-end',
    justifyContent:'flex-start',
  },

  alingSpace:{
    justifyContent:'space-around',
    alignContent:'space-around',
  },
  
  
});