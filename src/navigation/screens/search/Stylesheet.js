import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utilities/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundColor: colors.darkBlue,
  },

  contentWrapper: {
    flex: 1,
    paddingBottom: '40%',
  },

  bottomSheetWrapper: (height = Platform.OS === 'ios' ? '40%' : '45%') => ({
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    height,
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.semiDarkBlue,
  }),

  capsuleWrapper: {
    alignItems: 'flex-start',
  },

  capsule: (
    backgroundColor = colors.lightYellow,
    minWidth = 16,
    height = 8,
    shouldAlignCenter = false,
  ) => ({
    minWidth,
    height,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor,
    alignSelf: shouldAlignCenter ? 'center' : 'auto',
  }),

  bottomSheetContentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarWrapper: (marginX, marginY) => ({
    position: 'absolute',
    marginTop: marginY,
    marginLeft: marginX,
  }),

  circle: {
    borderRadius: 1000,
  },

  profilePic: (
    shouldHaveBorder = false,
    showSmaller = false,
    isActive = false,
  ) => ({
    height: showSmaller ? 40 : 80,
    aspectRatio: 1,
    borderRadius: 1000,
    marginBottom: showSmaller ? 5 : 20,
    borderWidth: shouldHaveBorder ? 2 : 0,
    borderColor: isActive ? colors.green : colors.white,
  }),

  nameLabel: (showSmaller = false, isActive = false) => ({
    fontSize: showSmaller ? 10 : 20,
    fontWeight: '600',
    color: isActive ? colors.green : colors.white,
    minWidth: 100,
    alignSelf: 'center',
  }),

  numberLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lightOffWhite,
    marginTop: 15,
    marginBottom: 25,
  },

  continuePressable: {
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 2.5,
    aspectRatio: 173 / 60,
    borderRadius: 10,
  },

  continuePressableLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },

  circularField: (zIndex = 1, height = 130) => ({
    height: height + 100,
    aspectRatio: 1,
    borderRadius: 1000,
    marginTop: (Dimensions.get('screen').width - (height + 100)) / 2 + 50,
    borderWidth: 2,
    borderColor: colors.mediumDarkBlue,
    position: 'absolute',
    alignSelf: 'center',
    zIndex,
  }),
});
