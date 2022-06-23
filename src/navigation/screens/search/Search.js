import React from 'react';
import {View, Text, FlatList} from 'react-native';
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

    <View style={styles.bottomSheetContentWrapper}>
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

const Content = props => {
  const [peopleGroups, setPeopleGroups] = React.useState([]);

  const distributeDataInGroups = () => {
    let circleArray = [];

    for (i = 0; i < Math.log2(people.length / 2 + 1); i++) {
      circleArray.push(
        people.slice(2 * (Math.pow(2, i) - 1), 2 * (Math.pow(2, i + 1) - 1)),
      );
    }

    setPeopleGroups(circleArray);
  };

  const renderPeopleOnCircles = (item, index, circleIndex) => {
    let searchKey = props?.route?.params?.searchKey;
    let shouldHighlight =
      searchKey?.length > 2 && item.name.includes(searchKey);
    let shouldShowSmaller = true && !shouldHighlight;

    degree = (circleIndex - 1) * 50 - 30;
    degreeDifferencePath = 38;
    if (index % 2 == 0 || index == 0) {
      degree = degreeDifferencePath * index + degree;
    } else {
      degree = degreeDifferencePath * (index - 1) + 180 + degree;
    }
    radius = (circleIndex * 100 + 100) / 2;
    rad = (Math.PI * degree) / 180;
    marginX = radius - (shouldShowSmaller ? 23 : 45);
    marginY = radius - (shouldShowSmaller ? 23 : 45);
    marginX = marginX - radius * Math.cos(rad);
    marginY = marginY - radius * Math.sin(rad);

    return (
      <View style={styles.avatarWrapper(marginX, marginY)}>
        <Icon
          source={{uri: item.profileURL}}
          styles={[styles.profilePic(true, shouldShowSmaller, shouldHighlight)]}
        />
        <Text style={styles.nameLabel(shouldShowSmaller, shouldHighlight)}>
          {item.name}
        </Text>
      </View>
    );
  };

  const renderCircles = ({item, index}) => {
    let circleIndex = index;

    return (
      <View
        style={styles.circularField(circleIndex + 1, 100 * (circleIndex + 1))}>
        <FlatList
          data={item}
          renderItem={({item, index}) =>
            renderPeopleOnCircles(item, index, circleIndex + 1)
          }
          keyExtractor={(item, circleIndex) =>
            `Person_${circleIndex.toString()}`
          }
          scrollEnabled={false}
        />
      </View>
    );
  };

  React.useEffect(() => {
    distributeDataInGroups();
  }, []);

  return (
    <View style={styles.contentWrapper}>
      <FlatList
        data={peopleGroups}
        renderItem={renderCircles}
        keyExtractor={(item, index) => `Path_${index.toString()}`}
        scrollEnabled={false}
      />
    </View>
  );
};

const Search = props => {
  return (
    <View style={styles.container}>
      <Content {...props} />
      <BottomSheet {...props} />
    </View>
  );
};

export default Search;
