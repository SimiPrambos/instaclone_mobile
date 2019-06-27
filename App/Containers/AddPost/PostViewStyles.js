import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  black: {
    color: 'black',
  },
  bold: {
    fontWeight: 'bold',
  },
  grey: {
    color: 'grey',
  },
  padded: {
    paddingHorizontal: 15,
  },
  spanText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    paddingHorizontal: 2,
  },
  container: {
    marginTop: -10,
    borderColor: 'transparent',
  },
  iconOption: {
    transform: [{ rotate: '90deg' }],
  },
  imageSection: {
    marginHorizontal: -5,
  },
  image: {
    height: 200,
    width: null,
    flex: 1,
  },
  button: {
    paddingHorizontal: 15,
  },
  caption: {
    marginVertical: -10,
  },
})
