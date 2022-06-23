import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Assets from '../../../utilities/Assets';

import {profileURL, screens} from '../../../utilities/Constants';
import {styles} from './Stylesheet';

const Icon = ({source, styles}) => (
  <Image source={source} style={[styles, {resizeMode: 'contain'}]} />
);

const CustomButton = ({label, btn}) => (
  <TouchableOpacity style={btn.styles} onPress={() => btn.action()}>
    <Text style={label.styles}>{label.value}</Text>
  </TouchableOpacity>
);

const Request = props => {
  return (
    <ImageBackground source={Assets.bgMoneyRequest} style={styles.bgImg}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Icon source={{uri: profileURL}} styles={styles.profilePic} />
          <Text style={styles.nameLabel}>Abhinav Mahajan</Text>
          <Text style={styles.requestingLabel}>is requesting for:</Text>
          <Text style={styles.balance}>₦ 200,000</Text>

          <View style={styles.contentPresablesWrapper}>
            <CustomButton
              btn={{
                action: () => {
                  props.navigation.navigate(screens.SearchScreen);
                },
                styles: styles.contentPresables(true),
              }}
              label={{
                value: 'Send money',
                styles: styles.contentPresablesLabel(true),
              }}
            />

            <CustomButton
              btn={{
                action: () => {
                  props.navigation.navigate(screens.MainScreen);
                },
                styles: styles.contentPresables(),
              }}
              label={{
                value: `Don't send`,
                styles: styles.contentPresablesLabel(),
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Request;
