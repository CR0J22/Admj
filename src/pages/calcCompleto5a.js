import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform,
  
} from 'react-native';

import InputData from '../components/input'

//colocar dados basicos selção 
//informações da cultura

export default function CalcCalcario() {
  const [v1, setV1] = useState(0)
  const [v2, setV2] = useState(0)
  const [ctc, setCtc] = useState(0)
  const [prnt, setPrnt] = useState(0)

  
  
  
  let Nc = ((v2-v1)*ctc)*(prnt*0.01)/100
  


  return (
      
      <View style={styles.container}>


        
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Calc. 5° Aprox</Text>
        </View>
        
        <View 
          style={{
            flex:1, 
            justifyContent:'space-between', 
            alignItems:'flex-start',
          }}>
          
          //inputs tenho que colocar formatação inteligente
          //vermelho baixo verde alto

          <View style={{
            flex:1,
            justifyContent:'space-between', 
            width: '100%',
          }}>      
              <InputData
                
                title="v1"
                placeholder="Saturação por Bases (Analise)"
                keyboardType='number-pad'
                onChangeText={setV1}
              />
              <InputData 
                
                title="v2"
                placeholder="Saturação por Bases Da Cultura"
                keyboardType='numeric'
                onChangeText={setV2}
              />
              <InputData 
                title="CTC Total"
                placeholder="Capacidade de Troca Total"
                keyboardType='numeric'
                onChangeText={setCtc}
              />
              <InputData 
                title="PRNT"
                placeholder="Poder de Neutralização (Calcario)"
                keyboardType='numeric'
                onChangeText={setPrnt}
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
                justifyContent: 'center',}}>{Nc.toFixed(3)} t/ha</Text>
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