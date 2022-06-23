import React from 'react';
import {ImageBackground, Dimensions, View, Text} from 'react-native';
import Assets from '../../../utilities/Assets';

import {colors, profileURL, screens} from '../../../utilities/Constants';
import {styles} from './Stylesheet';
import {CustomButton, Icon} from '../../../utilities/Extensions';

const Request = props => {
  return (
    <ImageBackground source={Assets.bgMoneyRequest} style={styles.bgImg}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.circularField('35%', colors.semiDarkBlue)}>
            <View style={styles.circularField('80%', colors.darkViolet)}>
              <Icon
                source={{uri: profileURL}}
                styles={[styles.profilePic(), {position: 'absolute'}]}
              />
            </View>
          </View>

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
