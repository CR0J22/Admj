import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  DrawerItem } from '@react-navigation/drawer';




export function DrawerContent(props){
    return(
        <View style={{backgroundColor:'#f7fff5', height: '100%'}}>
            <View style={{
                borderBottomColor: '#36e800',
                borderBottomWidth: 1,
                width: '85%',
                flexDirection:'row',
                justifyContent: 'center', 
                alignItems: 'center', 
                margin: 20,
                top:15
            }}>
                
                <Text style={styles.cabecalho}>Sanus Solus</Text> 
                <Image 
                    style={{width: 70, height: 70}} 
                    source={require('../assets/icon.png')}
                />
                
            </View>
            <View style={{top:30, justifyContent: 'center', alignItems: 'center'}}>
                
            <DrawerItem 
                    style={styles.drawItem}
                    label="Inicio"
                    labelStyle={styles.label}
                    onPress={() => {props.navigation.navigate('Inicio')}}
                />
                <DrawerItem 
                    style={styles.drawItem}
                    label="Calc. Calcario"
                    labelStyle={styles.label}
                    onPress={() => {props.navigation.navigate('CalcCalcario')}}
                />
                <DrawerItem 
                    style={styles.drawItem}
                    label="Calc. Gesso"
                    labelStyle={styles.label}
                    onPress={() => {props.navigation.navigate('CalcGesso')}}
                />
                <DrawerItem 
                    style={styles.drawItem}
                    label="Calc. Custo"
                    labelStyle={styles.label}
                    onPress={() => {props.navigation.navigate('CalcCusto')}}
                />
                <DrawerItem 
                    style={styles.drawItem}
                    label="Ajude nos"
                    labelStyle={styles.label}
                    onPress={() => {props.navigation.navigate('Doe')}}
                />
                
            </View>

  

            <View style={{position:'absolute', bottom:10, backgroundColor: '#c20', width: '100%'}}>
                <Text style={{color: '#fff', fontFamily:'NovaMono_400Regular', textAlign:'center'}}>
                    Este é um 0din do ClΔ--22
                    {"\n"}Beta 0.0.1 
                </Text>
            </View>
           
            

        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho:{

        borderRadius: 0,
        height: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'NovaMono_400Regular',
        color: '#000000',
        fontSize: 30,
    },
    drawItem: {
        
        width: '90%',
        borderColor: '#239600',
        borderBottomWidth:1,
        borderRadius: 0,
        height: 50,
        fontFamily: 'NovaMono_400Regular',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    label: {
        fontFamily: 'NovaMono_400Regular',
        fontSize: 22,
        color: '#000000',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    image: {
        width: 60,
        height: 60, 
        borderRadius: 90,
        borderColor: '#54f75f',
        
    },
    
})