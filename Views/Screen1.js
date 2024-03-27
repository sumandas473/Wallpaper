import { View, Text, StyleSheet, FlatList , Image, TouchableOpacity,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { wallpapertextinput } from '../textinput/wallpapertextinput'
import Navbar from './Navbar'

import { useNavigation } from '@react-navigation/native'
 




const Screen1 = (props) => {

  const navigation = useNavigation();


  const access_key = 'u3aAxLRyiL3wS2PwlKbmCMHL_D86KQCjUaODtt0E49I'

  const [searchvalue, setSearchValue] = useRecoilState(wallpapertextinput)
  // console.log(searchvalue)
  const [imagecollections, setImageCollection] = useState([])
 
  useEffect(() => {
    const imagecollection = async () => {
      let data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchvalue}&client_id=${access_key}`)
      let jsondata = await data.json()
      setImageCollection(jsondata)
      // console.log(jsondata)
    }
    imagecollection()
  }, [searchvalue])

  imagecollections.total == 0 && setSearchValue('all')

  const showimags =(item)=>{
    // console.log(item)
    navigation.navigate('s2',{clickedimage: `${JSON.stringify(item)}`})
  }


  return (
    <View style={styles.container}>
      <Navbar/>
      
      <FlatList numColumns={2} data={imagecollections.results}
        renderItem={({ item }) =>
         <TouchableOpacity onPress={()=> showimags(item)}  >
           <View style={styles.imagecon}>
            {/* <Text>{item.title}</Text> */}

            <Image source={{ uri: item.urls.regular }} style={styles.imagestyle} />
            
          </View>
         </TouchableOpacity>
        
       


        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    width: '100%',
    height: '100%',
    // backgroundColor: '#326499',
    alignItems: 'center',
    // color:'white'

  },
  imagecon:{
    
    height:400,
    width:200,
    
    // display:'flex',
    // flexDirection:'row'

  },



  imagestyle:{
    height:'100%',
    width:'100%',

  }

});


export default Screen1