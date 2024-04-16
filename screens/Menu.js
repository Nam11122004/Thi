import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { hienThi } from '../reduct_toolkit/actions';
const Menu = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const LopHoc = useSelector(state => state.LopHoc);

    useEffect(() => {
        fetch('http://10.0.2.2:3000/LopHoc')
            .then(response => response.json())
            .then(data => {
                dispatch(hienThi(data));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [dispatch]);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('DanhSach')} style={{ backgroundColor: '#F26398', padding: 10, borderRadius: 5, alignItems: 'center' }}>
        <Text>Danh Sách</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Them')} style={{ backgroundColor: '#F26398', padding: 10, borderRadius: 5, alignItems: 'center' }}>
        <Text>Thêm lớp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})