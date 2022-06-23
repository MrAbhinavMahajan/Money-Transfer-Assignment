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

  bottomSheetWrapper: (height = '40%') => ({
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

  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

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
    width: 150,
    aspectRatio: 173 / 60,
    borderRadius: 10,
  },

  continuePressableLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});
