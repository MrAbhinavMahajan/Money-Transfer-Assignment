import React from 'react';
import {View, Text, SafeAreaView, FlatList, Animated} from 'react-native';
import Assets from '../../../utilities/Assets';
import {
  colors,
  people,
  profileURL,
  screens,
} from '../../../utilities/Constants';
import {styles} from './Stylesheet';
import {CustomButton, Icon} from '../../../utilities/Extensions';

const BottomSheet = props => (
  <View style={styles.bottomSheetWrapper()}>
    <View style={styles.capsule(colors.lightViolet, 64, 6, true)} />

    <View style={styles.contentWrapper}>
      <Icon source={{uri: profileURL}} styles={styles.profilePic()} />
      <Text style={styles.nameLabel()}>Abhinav Mahajan</Text>
      <Text style={styles.numberLabel}>(+234) 905 1694 275</Text>

      <CustomButton
        btn={{
          action: () => {
            props.navigation.navigate(screens.MainScreen);
          },
          styles: styles.continuePressable,
        }}
        label={{
          value: 'Continue',
          styles: styles.continuePressableLabel,
        }}
      />
    </View>
  </View>
);

const renderPeople = ({item, index}) => {
  return (
    <View
      style={{
        ...styles.avatarWrapper,
        transform: [{translateX: index ** 3}, {scale: 1}],
      }}>
      <Icon
        source={{uri: item.profileURL}}
        styles={styles.profilePic(true, true)}
      />
      <Text style={styles.nameLabel(true)}>{item.name}</Text>
    </View>
  );
};

const Content = props => (
  <View>
    <Animated.FlatList
      data={people ?? []}
      renderItem={renderPeople}
      keyExtractor={(item, index) => `Person_${index.toString()}`}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const Search = props => (
  <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
    <Content {...props} />
    <BottomSheet {...props} />
  </SafeAreaView>
);

export default Search;
