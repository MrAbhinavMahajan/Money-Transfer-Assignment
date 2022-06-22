import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './Stylesheet';
const Search = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <View>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
