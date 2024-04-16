import React, { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hienThi } from '../reduct_toolkit/actions';
import { useNavigation } from '@react-navigation/native';

const Hello = () => {
    const navigation = useNavigation();
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

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Menu');
        }, 3000);
      }, [navigation]);
      return (
        <View style={[styles.container, {backgroundColor: '#FFFFFF'}]}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/21/dd/55/21dd5538257fd77e17b35b39d9d903ea.jpg',
            }}
            style={styles.image}
          />
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 500,
    },
});

export default Hello;
