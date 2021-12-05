import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform,
  
} from 'react-native';

import Lottie from 'lottie-react-native'

import Plant from '../assets/plant.json'

export default function Inicio() {
 

  return (
      
    <View style={styles.container}>

        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Olá! 😃</Text>
        </View>
        <View>
            <View style={{bottom:40, top:5}}>
                <Text style={styles.textall}>
                    Terra a base de tudo
                    {"\n"}Você pode ter boa semente, 
                    {"\n"}pode ter sorte de pegar uma boa epocá para a sua planta,
                    e nada disso vai adiantar se você não cuidar bem do seu solo,
                    afinal ele é a base de tudo.
                    {"\n"}Este Aplicativo tem o objetivo de te ajudar a cuidar desse bem que nos sustenta, então vamos lá
                    {"\n"}Através do menu lateral você terá ascesso as formulas utilizadas para calculos que espero que sejam uteis a você
                    {"\n"}
                    <Text style={[styles.textall,{fontSize:25,color: '#fff'}]}>😁</Text>
                </Text>
               
            </View>

            <View style={{ alignSelf:'center', bottom:30}}>
                <Lottie autoSize resizeMode="contain" source={Plant} autoPlay loop/>
            </View>
            <View style={{backgroundColor:'#c20', height:27, width: '100%'}}>
                    <Text  style={[styles.textall,{fontSize:13,color: '#fff'}]}>Este Programa NÃO subistitui um Tecnico</Text>
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
    top:5,
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
});