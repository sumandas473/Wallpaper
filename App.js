import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Views/Navbar';
import Screen1 from './Views/Screen1';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './Views/Screen2';



const stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <RecoilRoot>
        <NavigationContainer>
          <stack.Navigator >
            <stack.Screen name='s1'  component={Screen1} options={{title: 'Wallpaper', headerTitleAlign:'center' }}/>
            <stack.Screen name='s2' component={Screen2} options={{title: 'Back to Home',headerTitleAlign:'center'}}/> 

            </stack.Navigator>
            
        </NavigationContainer>
        
      </RecoilRoot>
     
 
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:50,
    width:'100%',
    height:'100%',

    // backgroundColor: '#49D321',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});


export default App