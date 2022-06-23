import React from 'react';
import {SafeAreaView, Image, View, Text, FlatList} from 'react-native';
import Assets from '../../../utilities/Assets';
import {colors, screens, people} from '../../../utilities/Constants';
import {CustomButton, Icon} from '../../../utilities/Extensions';
import {styles} from './Stylesheet';

const renderPeople = ({item, index}) => {
  let color, icon;

  switch (item.requestStatus) {
    case 'Received':
      color = colors.lightGreen;
      icon = Assets.received;
      break;

    case 'Sent':
      color = colors.semiDarkYellow;
      icon = Assets.sent;
      break;

    default:
      color = colors.lightRed;
      icon = Assets.failed;
      break;
  }

  return (
    <View style={styles.bottomSheetCards(index % 2 === 0)}>
      <View style={{flexDirection: 'row'}}>
        <Icon source={{uri: item.profileURL}} styles={styles.profilePic} />

        <View>
          <Text style={styles.nameLabel}>{item.name}</Text>

          <View style={styles.capsuleWrapper}>
            <View style={styles.capsule(color, 80, 26)}>
              <View
                style={{
                  height: '70%',
                  aspectRatio: 1,
                  borderRadius: 1000,
                  backgroundColor: colors.white,
                  margin: 5,
                  padding: 2,
                }}>
                <Icon
                  source={icon}
                  styles={{height: '100%', aspectRatio: 1, alignSelf: 'center'}}
                />
              </View>
              <Text style={styles.requestStatus}>{item.requestStatus}</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.balanceLabel(color)}>{item.balance}</Text>
    </View>
  );
};

const BottomSheet = props => (
  <View style={styles.bottomSheetWrapper()}>
    <View style={styles.capsule(colors.lightViolet, 64, 6, true)} />

    <View style={styles.bottomSheetFilters}>
      <Text style={styles.bottomSheetFilterHeaderLabel}>All Transactions</Text>

      <View style={styles.bottomSheetFilterApplier}>
        <Text style={styles.bottomSheetFilterApplierKeyLabel}>Sort by: </Text>
        <Text style={styles.bottomSheetFilterApplierValueLabel}>Recent </Text>
        <Icon source={Assets.picker} styles={{}} />
      </View>
    </View>

    <FlatList
      data={people ?? []}
      renderItem={renderPeople}
      keyExtractor={(item, index) => `Person_${index.toString()}`}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const Header = props => (
  <View style={styles.headerWrapper}>
    <View style={styles.headerInfoWrapper}>
      <View style={[styles.menuBarWrapper, styles.circle]}>
        <Image source={Assets.menuBars} />
      </View>

      <Text style={styles.headerLabel}>Hello Sandra</Text>
    </View>

    <CustomButton
      btn={{
        action: () => {},
        styles: styles.addMoneyPressable,
      }}
      label={{
        value: 'Add money',
        styles: styles.addMoneyPressableLabel,
      }}
    />
  </View>
);

const Content = props => (
  <View style={styles.contentWrapper}>
    <Text style={styles.contentDescription}>Your current balance is</Text>

    <Text style={styles.contentBalance}>₦ 200,000</Text>

    <View style={styles.contentPresablesWrapper}>
      <CustomButton
        btn={{
          action: () => {
            props.navigation.navigate(screens.RequestScreen);
          },
          styles: styles.contentPresables(),
        }}
        label={{
          value: 'Request money',
          styles: styles.contentPresablesLabel,
        }}
      />

      <CustomButton
        btn={{
          action: () => {
            props.navigation.navigate(screens.SearchScreen);
          },
          styles: styles.contentPresables(true),
        }}
        label={{
          value: 'Send money',
          styles: styles.contentPresablesLabel,
        }}
      />
    </View>
  </View>
);

const Main = props => {
  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <Header {...props} />
      <Content {...props} />
      <BottomSheet {...props} />
    </SafeAreaView>
  );
};

export default Main;
