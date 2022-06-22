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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
  },

  profilePic: {
    height: Dimensions.get('screen').height / 4,
    aspectRatio: 1,
    borderRadius: 1000,
  },

  nameLabel: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.lightOffWhite,
    padding: 15,
  },

  requestingLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lightOffWhite,
    padding: 15,
  },

  balance: {
    fontSize: 38,
    fontWeight: '700',
    color: colors.white,
    padding: 15,
  },

  contentPresablesWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  contentPresables: (sendBtn = false) => ({
    backgroundColor: sendBtn ? colors.pink : 'transparent',
    borderWidth: 1,
    borderColor: sendBtn ? colors.pink : colors.semiDarkViolet,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    aspectRatio: 173 / 60,
    borderRadius: 10,
    marginBottom: 20,
  }),

  contentPresablesLabel: (sendBtn = false) => ({
    fontSize: 16,
    fontWeight: '600',
    color: sendBtn ? colors.white : colors.semiDarkViolet,
  }),
});
