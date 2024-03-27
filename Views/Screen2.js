import { View, Text ,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { wallpapertextinput } from '../textinput/wallpapertextinput'


const Screen2 = ({ route }) => {
  const { clickedimage } = route.params

  const [imagedata, setimagedata] = useState()


  useEffect(()=>{ setimagedata(JSON.parse(clickedimage) ?.urls.regular)},[
   
  ])

  const [searchvalue, setSearchValue] = useRecoilState(wallpapertextinput)

  const getpermission = async () => {

 
  }

  const shownextimage = async () => {
    const data = await fetch (`https://source.unsplash.com/900x1600/?${searchvalue}`)
   
    // setimagedata(data.url)
    // console.log(data.url)
    setimagedata(data.url)
    console.log(data.url)


  }

  return (

    <View style={styles.imagecon}>

      <Image source={{ uri: imagedata }} style={styles.imagestyle} />

      <TouchableOpacity style={styles.download} onPress={getpermission}>
        <Text>
          Download
        </Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.next}  onPress={shownextimage}>
        <Text>
          Next image
        </Text>
      </TouchableOpacity>
            
    </View> 
    
    
  )
}

const styles = StyleSheet.create({
  
  imagecon:{
    
    height:'100%',
    width:'100%',
    

  },
  imagestyle:{
    height:'100%',
    width:'100%',

  },
  download:{
    paddingHorizontal: 20,
    paddingVertical:10,
    position:'absolute',
    bottom:50,
    marginLeft:60,
    backgroundColor:'white',
    borderRadius:10,
    elevation:10



  },
  next:{
    position:'absolute',
    bottom:50,
    right:0,
    marginRight:60,
    backgroundColor:'white',
    paddingHorizontal: 20,
    paddingVertical:10,
    borderRadius:10,
    elevation:20

  }

});

export default Screen2