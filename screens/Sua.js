import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import store from '../reduct_toolkit/store'
import ComponentUpdate from '../component/Update'
const Sua = ({route}) => {
    const product = route.params.product
 
    const [updateItem, setUpdateItem] = useState(product)
    
  return (
    <Provider store={store}>
       <View>
      <TextInput style={styles.input} value={updateItem.ten_lop_ph36187} onChangeText={(text) => setUpdateItem({ ...updateItem, ten_lop_ph36187: text })} />
      <TextInput style={styles.input} value={updateItem.so_phong_ph36187} onChangeText={(text) => setUpdateItem({ ...updateItem, so_phong_ph36187: text })} />
      <TextInput style={styles.input} value={updateItem.so_ghe_ph36187.toString()} onChangeText={(text) => setUpdateItem({ ...updateItem, so_ghe_ph36187: text })} />
      <TextInput style={styles.input} value={updateItem.khu_nha_ph36187} onChangeText={(text) => setUpdateItem({ ...updateItem, khu_nha_ph36187: text })} />
      <TextInput style={styles.input} value={updateItem.hinh_anh_ph36187} onChangeText={(text) => setUpdateItem({ ...updateItem, hinh_anh_ph36187: text })} />
      <ComponentUpdate product={updateItem} />
    </View>
    </Provider>
  )
}

export default Sua

const styles = StyleSheet.create({})