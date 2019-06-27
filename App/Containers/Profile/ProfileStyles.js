import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')

export default StyleSheet.create({
  header: { backgroundColor: 'white' },
  tabSection: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentSection: { minHeight: height - 200 },
  gridSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImage: {
    height: 120,
    width: (width - 6) / 3,
  },
  marged: {
    margin: 1,
  },
})
