import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {colors} from '../utilities/Constants';

export const styles = StyleSheet.create({
  shadow: (shadowColor = colors.black) => ({
    shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }),

  searchHeaderWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchBtnWrapper: {
    aspectRatio: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchHeaderBackBtn: {
    transform: [{rotate: '90deg'}],
    height: 10,
  },

  searchTextInput: {
    width: '80%',
    marginRight: '10%',
    backgroundColor: colors.semiDarkBlue,
    borderColor: colors.lightGreen,
    borderWidth: 1,
    borderRadius: 10,
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    color: colors.white,
  },
});
