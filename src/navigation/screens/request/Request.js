import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {styles} from './Stylesheet';

const Request = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <View>
        <Text>Request</Text>
      </View>
    </SafeAreaView>
  );
};

export default Request;
