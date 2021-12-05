import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform,
  Image,
  TouchableOpacyty,
  Linking,
  Alert,
  Clipboard
  
} from 'react-native';
/* import Clipboard from 'expo-clipboard'; */

/* import * as Linking from 'expo-linking' */

function copy(){
  Clipboard.setString('6344ad9e-f7d7-4b70-8a68-09513ba75f1f')
  Alert.alert(
    "Chave Pix copiada! 😁",
    "6344ad9e-f7d7-4b70-8a68-09513ba75f1f"
  )
}

export default function Doe() {

  return (
      
      <View style={styles.container}>


        
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Ajude nos</Text>
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
              <Text style={[styles.textall,{fontSize:15}]}>
                Olá caro usuari@, 
                {"\n"}Esspero que esteja gostando do nosso aplicativo.
                {"\n"}Ele foi feito de forma independente ou seja sem patrocinio,
                {"\n"}e nossa equipe optou por não utilizar propagandas para o usuario ter uma melhor experiência.
                {"\n"}Desse modo para podermos melhorar e continuar mantendo e criando novos projetos precisamos de sua bondade
                {"\n"}Se puder contribuir financeiramente com qualquer quantia (qualquer mesmo até 5 centavos ajuda), Nos mande via <Text style={{color: '#12c41e'}} onPress={copy}>Pix</Text> ou <Text style={{color: '#12c41e'}}onPress={()=> { Linking.openURL(`https://picpay.me/cr0j22`)}}>PicPay</Text> 
                {"\n"}Ou se possui algum conhecimento em programação nos ajude no <Text style={{color: '#12c41e'}}onPress={()=> { Linking.openURL(`https://github.com/CR0J22`)}}>GitHub</Text>
                {"\n"}Diga nos o que você acha do nosso app ou nos de sugestões via <Text style={{color: '#12c41e'}}onPress={()=> { Linking.openURL(`mailto:crojan22@gmail.com`)}}>e-mail</Text>
                {"\n"}
                {"\n"}Obrigado de todos nós

              </Text>
              
              
            <View style={{bottom:22,position: 'absolute', width: '100%'}}>
                <Text style={[styles.textall,{fontSize:15}]}>Os dev's:</Text>
                <View
                style={{
                  top:5,
                    borderRadius: 10,
                    flexDirection: 'row',
                    color: '#fff',
                    padding: 5,
                    height:95,
                    backgroundColor: '#12c41e',
                    width: '110%',
                    alignSelf: 'center',
                    justifyContent: 'space-around',
                }}>
                    <View style={{    borderRadius: 90,  borderColor: '#54f75f',borderWidth:5}}>
                        <Image style={styles.image} source={require('../assets/Rj.jpeg')} />
                        <Text onPress={()=> { Linking.openURL(`https://www.instagram.com/rj_c2__02/`)}} style={styles.name}>Rj</Text>
                    </View>
                    <View style={{    borderRadius: 90,  borderColor: '#54f75f',borderWidth:5}}>
                        <Image style={styles.image} source={require('../assets/cla.jpeg')}/>
                        <Text style={styles.name}>ClΔ--22</Text>
                    </View>
                    <View  style={{    borderRadius: 90,  borderColor: '#54f75f',borderWidth:5}}>
                        <Image style={styles.image} source={require('../assets/Cr0jan.jpeg')}/>
                        <Text onPress={()=> { Linking.openURL(`https://www.instagram.com/cr0j22/`)}} style={styles.name}>Cr0jan</Text>
                    </View>
                </View>
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
  name: {
    fontSize: 14,
    fontFamily: 'NovaMono_400Regular',
    textAlign: 'center',
    backgroundColor: '#54f75f',
    borderRadius: 90,
    top:5,
  },
  image: {
    width: 60,
    height: 60, 
    borderRadius: 90,
    borderColor: '#54f75f',
    
  },
  
});