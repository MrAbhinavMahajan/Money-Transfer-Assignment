import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utilities/Constants';

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

  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  bgImg: {
    width: '100%',
    height: '100%',
  },

  lock: {
    height: 48,
    aspectRatio: 37.71 / 48,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
    top: Dimensions.get('screen').height / 2.4,
    left: Dimensions.get('screen').width / 2,
  },

  sidePrompt: {
    width: 323,
    aspectRatio: 323 / 224,
    borderTopRightRadius: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 20,
    backgroundColor: colors.blue,
    justifyContent: 'space-evenly',
  },

  sidePromptHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
  },

  sidePromptParagraph: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  },

  sidePromptButton: {
    width: 145,
    aspectRatio: 145 / 50,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  sidePromptButtonLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.blue,
  },

  capsuleWrapper: {
    flexDirection: 'row',
  },

  capsule: (backgroundColor = colors.lightYellow, width = 16, height = 8) => ({
    width,
    height,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor,
    marginRight: 5,
  }),
});
