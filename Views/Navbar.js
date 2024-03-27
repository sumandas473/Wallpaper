import { View,StyleSheet,Image, Text ,TextInput,} from 'react-native'
import React from 'react'
import search from '../assets/icons8-search-50.png'
import { useRecoilState } from 'recoil'
import {wallpapertextinput} from '../textinput/wallpapertextinput'
// import {useRecoilState} from'recoil'

const Navbar = () => {
  const [searchvalue,setSearchValue] = useRecoilState(wallpapertextinput)

  onChangeTextInput =(text) => {
    // console.log(text)
    setSearchValue(text)
  }


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={search} style={styles.search}/>
        <TextInput onChangeText={this.onChangeTextInput} style={styles.searchinput} placeholder='Search Anything...'   />


      </View>
       

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // display:'flex',
      padding: 10,
      width:'100%',
      // backgroundColor: '#C71EB0',
      alignItems: 'center',
      
    },

    searchContainer:{
      display:'flex',
      gap:10,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:"white",
      borderRadius:10,
      paddingVertical:10,
      paddingHorizontal:30,
      width: '95%',
      elevation:10,
    },
    search:{
      height:20,
      width:20
    },
    searchinput:{
      width:'90%',
    
    }



  });

export default Navbar