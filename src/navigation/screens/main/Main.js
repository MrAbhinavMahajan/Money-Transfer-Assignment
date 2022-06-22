import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './Stylesheet';

const Main = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <View>
        <Text>Main</Text>
      </View>
    </SafeAreaView>
  );
};

export default Main;
