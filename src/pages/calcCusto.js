import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform,
  
} from 'react-native';

import InputData from '../components/input'


export default function CalcCusto() {
  const [at, setAt] = useState(0)
  const [qh, setQh] = useState(0)
  const [pr, setPr] = useState(0)
  

  
  let PrecoT = (at*qh)*pr 

  return (
      
      <View style={styles.container}>


        
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Calc. Custo</Text>
        </View>
        
        <View 
          style={{
            flex:1, 
            justifyContent:'space-between', 
            alignItems:'flex-start',
          }}>
          
          <View style={{
            flex:1,
            justifyContent:'space-between', 
            width: '100%',
          }}>      
              <InputData 
                title="Aréa Total"
                placeholder="Aréa Total a ser corrigida"
                keyboardType='numeric'
                onChangeText={setAt}
              />
              <InputData 
                title="Recomendação"
                placeholder="Recomendação de corretivo"
                keyboardType='numeric'
                onChangeText={setQh}
              />
              <InputData 
                title="Preço"
                placeholder="Preço por Tonelada"
                keyboardType='numeric'
                onChangeText={setPr}
              />
              
            
              <View
              style={{
                color: '#fff',
                textAlign: 'center',
                height:50,
                backgroundColor: '#20df2d',
                width: '150%',
                textAlign: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{color:'#fff',textAlign: 'center',
                fontFamily: 'NovaMono_400Regular',
                fontSize: 24,        
                textAlign: 'center',
                alignSelf: 'center',
                justifyContent: 'center',}}>R$ {PrecoT.toFixed(2)}</Text>
              </View>
            
          </View>
        </View>
        
        
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'space-between', 
    paddingTop: Platform.OS === 'android' ? 44 : 44,
    padding: 20,
    
  },
  textall:{
    fontSize: 17,
    fontFamily: 'NovaMono_400Regular',
    textAlign: 'center',
  },
  titleText:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'NovaMono_400Regular',
    fontSize: 22,
  },
  titleCont: {
    height:40,
    backgroundColor: '#20df2d',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },
  input:{
    fontFamily: 'NovaMono_400Regular',
    width:'100%',
    marginBottom: 20,
    height: 35,
    borderColor: '#A9A9A9',
    borderBottomWidth: 1,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 15,
    height: 40,
    width: '70%',
    
    backgroundColor: '#20df2d',
    alignSelf: 'center',
    justifyContent: 'center',
  }
});