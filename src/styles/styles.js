const fonts = {
  barlowLight: 'Barlow-Light',
  barlowReg: 'Barlow-Regular',
  barlowMed: 'Barlow-Medium',
  barlowSemi: 'Barlow-SemiBold',
  barlowBold: 'Barlow-Bold'
}

const colors = {
  white: '#fff',
  black: '#000',
  primaryColor: '#333333',
  blue: '#4BB2E0',
  red: '#E04B4B',
  darkRed: '#ba3416',
  green: '#11C93B',
  darkGreen: '#0f8029',
  grey: '#abb0b3',
  lightGrey: '#F5F5F5',
  darkGrey: '#7c8082',
}

const text = {
  textH3: {
    fontSize: 28,
    fontFamily: fonts.barlowBold
  },
  textP: {
    fontSize: 16,
    fontFamily: fonts.barlowReg
  },
  headerText: {
    fontSize: 21,
    fontFamily: fonts.barlowMed
  },
}

const layout = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export { layout, colors, fonts, text };