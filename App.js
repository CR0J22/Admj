import * as React from 'react';

import { Button, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/components/myDrawer';

/*Paginas*/
import Inicio from './src/pages/inicio';
import CalcCalcario from './src/pages/calcCalcario';
import CalcGesso from './src/pages/calcGesso';
import CalcCusto from './src/pages/calcCusto';
import Doe from './src/pages/doe';


const Drawer = createDrawerNavigator();



export default function App() {

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      
    <Drawer.Navigator initialRouteName={"Inicio"} drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen options={{headerShown: false}} name="CalcCalcario" component={CalcCalcario} />
      <Drawer.Screen options={{headerShown: false}} name="Inicio" component={Inicio} />
      <Drawer.Screen options={{headerShown: false}} name="CalcGesso" component={CalcGesso} />
      <Drawer.Screen options={{headerShown: false}} name="CalcCusto" component={CalcCusto} />
      <Drawer.Screen options={{headerShown: false}} name="Doe" component={Doe} />
    </Drawer.Navigator>  
    
  </NavigationContainer>
  );
}