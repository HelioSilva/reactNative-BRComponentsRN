<big><h1 align="center">BrComponentsRN</h1><h4>Basic components for react-native<h4></big>

## Intro
Components basics with props useful.

## Why
Components have semantic names with html, which makes learning easier.
Ex: 
 `<BrContent>`, `<BrButton`, `<BrTextField>`.
 
 Some properties :
  * *flex*
  * *Middle*
  * *Bottom*
  * *Top*
  * *Row*
  * *Bg*
  * *vh*
  * *vw*
  * *Style={{ props natives View(Component Native) }}*

## How

Just import lib like this:  import {BrContent} from brcomponents';


## Install

```sh
npm install --save brcomponentsrn
```

## Usage
```js
import {BrContent} from 'brcomponentsrn';

// ...
export default function Login() {
  return (

    <ImageBackground 
        source={require('../assets/background.jpg')} 
        style={{width:'100%',height:'100%'}}>

          <Block flex={1} middle bg='rgba(66,44,140,0.9)'>
            <Block flex={0.5} botton vw={'100%'} >
              <Text
                style={{
                  fontWeight:'bold',
                  fontSize:45,
                  color:'#ccc'
                }}
              >
                BRComponentsRN
              </Text>
            </Block>
            <Block flex={0.4} middle vw={'100%'}  >
              <TextField vw={'90%'} hint='Username' />
              <TextField vw={'90%'} hint='Password' />
              <BrButton  vw={'90%'}  title='Enter'/>
              <Block alRigth vw={'90%'} style={{marginTop:5}} ><Text style={[styles.label,styles.corLink]}>Esqueci a senha</Text></Block>
            </Block>
            <Block middle row flex={0.1}>
                <Text style={styles.label}>Não tem conta?</Text>
                <Text style={[styles.label,styles.corLink]}> Crie aqui!</Text>
            </Block>
          </Block>

    </ImageBackground>
    
  );
}
```

