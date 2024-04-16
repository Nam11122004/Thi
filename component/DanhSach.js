import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Remove from './Delete';
import { useNavigation } from '@react-navigation/native';

const DanhSach = () => {
  const navigation = useNavigation();
  const danhSach = useSelector(state => state.LopHoc); // Sử dụng useSelector để lấy danh sách từ Redux store

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={{ width: 120, height: 200, resizeMode: 'contain' }} source={{ uri: item.hinh_anh_ph36187 }} />
      <View>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
          Tên nhà hàng: {item.ten_lop_ph36187}
        </Text>
        <Text style={{ color: 'black', fontSize: 14 }} >
          Mô tả: {item.so_phong_ph36187}
        </Text>
        <Text style={{ color: 'black', fontSize: 14 }}>
          Ngày nhập: {item.so_ghe_ph36187}
        </Text>
        <Text style={{ color: 'black', fontSize: 14 }}>
          Giá tiền: {item.khu_nha_ph36187}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Update', { product: item })} style={{ backgroundColor: '#F26398', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Sửa</Text>
        </TouchableOpacity>
        <Text></Text>
        <Remove product={item} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={danhSach} // Truyền danh sách đã lấy từ Redux store vào prop data của FlatList
        renderItem={renderItem} // Truyền hàm renderItem để render từng item trong danh sách
        keyExtractor={item => item.id} // Đặt key cho mỗi item trong danh sách
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#F7DCB9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:20,
  },
});

export default DanhSach;
