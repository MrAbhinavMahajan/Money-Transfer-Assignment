import {Platform, StyleSheet} from 'react-native';
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

  searchTextInput: {
    width: Platform.OS === 'ios' ? '90%' : '80%',
    backgroundColor: colors.semiDarkBlue,
    borderColor: colors.lightGreen,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: colors.white,
  },
});
