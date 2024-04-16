import { StyleSheet, Text, TouchableOpacity, View,ToastAndroid } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Them } from '../reduct_toolkit/actions'
import { useNavigation } from '@react-navigation/native'
const Add = (product) => {
  const navigation = useNavigation()
    const dispatch = useDispatch()
    
    const handleAdd = () => {
        dispatch(Them(product.product))
        ToastAndroid.show('Them thanh cong', ToastAndroid.SHORT)
        navigation.navigate('DanhSach')
    }
  return (
    <View>
      <TouchableOpacity onPress={handleAdd} style={{ backgroundColor: '#F26398', padding: 10, borderRadius: 5, alignItems: 'center' }}>
        <Text style={[ { color: 'white', fontWeight: 'bold',fontSize:20 }]}>Thêm mới</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({})