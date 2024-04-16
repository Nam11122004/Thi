import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../reduct_toolkit/store'
import DanhSach from '../component/DanhSach'
const DuLieu = () => {
  return (
    <Provider store={store}>
      <DanhSach/>
    </Provider>
  )
}

export default DuLieu

const styles = StyleSheet.create({})