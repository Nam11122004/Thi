import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import Add from '../component/Add'
import { Provider } from 'react-redux'
import store from '../reduct_toolkit/store'
const Them = () => {
    const [ten_lop_ph36187, setTenLop] = useState('')
    const [so_phong_ph36187, setSoPhong] = useState('')
    const [so_ghe_ph36187, setSoGhe] = useState('')
    const [khu_nha_ph36187, setKhuNha] = useState('')
    const [hinh_anh_ph36187, setHinhAnh] = useState('')
    const product = {
        ten_lop_ph36187,
        so_phong_ph36187,
        so_ghe_ph36187,
        khu_nha_ph36187,
        hinh_anh_ph36187
    }
  return (
    <Provider store={store}>
    <View style={{flex: 1}}>
      <TextInput placeholder='Tên lớp' onChangeText={text => setTenLop(text)}/>
      <TextInput placeholder='Số phòng' onChangeText={text => setSoPhong(text)}/>
      <TextInput placeholder='Số ghế' onChangeText={text => setSoGhe(text)}/>
      <TextInput placeholder='Khu nhà' onChangeText={text => setKhuNha(text)}/>
      <TextInput placeholder='Hình ảnh' onChangeText={text => setHinhAnh(text)}/>
      <Add product={product}/>
    </View>
    </Provider>
  )
}

export default Them

const styles = StyleSheet.create({})