import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { xoa } from '../reduct_toolkit/actions'

const Remove = (product) => {
    const dispatch = useDispatch()
    const handleXoa = () => {
        Alert.alert(
            'Xóa',
            'Ban co chac xoa san pham nay khong?',
            [
                {
                    text: 'Khong',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Co', onPress: () => dispatch(xoa(product.product.id)) },
            ]
        )
    }
  return (
    <View>
      <TouchableOpacity style={{ backgroundColor: '#F26398', padding: 10, borderRadius: 5, alignItems: 'center' }} onPress={handleXoa}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Xóa</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Remove

const styles = StyleSheet.create({})