import { StyleSheet, Text, TextInput, TouchableOpacity, View,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sua } from '../reduct_toolkit/actions'
import { useNavigation } from '@react-navigation/native'
const Update = (product) => {
    const navigation = useNavigation()
   const product2 = product.product
    console.log(product2)
    const dispatch = useDispatch()
    const handleUpdate = () => {
        try {
            if(product2 && product2.id){
                dispatch(sua({itemId:product2.id,updateItem:product2}))
                ToastAndroid.show('Sua thanh cong', ToastAndroid.SHORT)
                navigation.navigate('DanhSach')
            }else{
                console.log('Lỗi: Đối tượng product không hợp lệ hoặc thiệu thuộc tính itemId')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View>
      <TouchableOpacity style={{ backgroundColor: '#F26398', padding: 10, borderRadius: 5, alignItems: 'center' }} onPress={handleUpdate}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sửa</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Update

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})