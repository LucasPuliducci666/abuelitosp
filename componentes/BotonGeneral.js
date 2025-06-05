import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BotonGeneral = () => {
  return (
    <View>
        <Text>BotonGeneral</Text>
        <Image
            source={{
                uri: 'imagenes\telefono.png'
            }}
        />
    </View>
  )
}

export default BotonGeneral

const styles = StyleSheet.create({
    
})