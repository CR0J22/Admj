import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TextInputProps,
  
} from 'react-native';

import {TextInputMask } from 'react-native-masked-text'

interface InputDataProps extends TextInputProps{
  title: string;
  
}



export default function InputData({title, ...rest }: InputDataProps){
  const [isfocused, setIsFocused] = useState(false)
  const [isfilled, setIsfilled] = useState(false)

  function handleinputfocus(){
    setIsFocused(true)
    
  }
  function handleinputblur(){
    setIsFocused(false)

  }

  function handleinputchange(value: string){
    setIsfilled(!!value)

  }
  
    return (
    <View>
        <Text style={styles.textall}>{ title }</Text>
          <TextInput
            
            style={[styles.input,
            (isfocused || isfilled) && {borderColor: '#20df2d'}
            ]}
            onFocus={handleinputfocus}
            onBlur={handleinputblur}
            {...rest}

          ></TextInput>
    </View>
  )
}
const styles = StyleSheet.create({
    textall:{
      fontSize: 16,
      fontFamily: 'NovaMono_400Regular',
      alignItems:'flex-start',
    },
    
    input:{
      fontFamily: 'NovaMono_400Regular',
      width:'95%',
      marginBottom: 20,
      height: 35,
      borderColor: '#A9A9A9',
      borderBottomWidth: 1,
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      fontSize: 14.3
      
      
    },
  });