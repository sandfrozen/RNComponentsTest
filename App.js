import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import XBar from 'react-native-x-bar'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <XBar
          left={<Text>left</Text>}
          centerTop={<Text>lean left</Text>}
          centerBottom={<Text>lean left</Text>}
          right={<Text>right</Text>}
          layout='absolute center'
          containerStyle={styles.container}
          slotStyle={styles.slot}
          leftSlotStyle={styles.leftSlot}
          centerTopSlotStyle={styles.centerTopSlot}
          centerBottomSlotStyle={styles.centerBottomSlot}
          rightSlotStyle={styles.rightSlot}
          centerTopSlotOnPress={ () => {
            console.log("centerTopSlotOnPress")
          }}
          centerBottomSlotOnPress={ () => {
            console.log("centerbottomSlotOnPress")
          }}
        />
      </View>
    )
  }
}

const lrPadding = 8

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fcfcfc',
    marginTop: 20,
  },
  slot: {
    paddingTop: 16,
    paddingBottom: 16
  },
  leftSlot: {
    paddingLeft: lrPadding
  },
  centerSlot: {
    paddingRight: lrPadding,
    paddingLeft: lrPadding,
  },
  centerTopSlot: {
    paddingRight: lrPadding,
    paddingLeft: lrPadding,
    paddingBottom: 8,
  },
  centerBottomSlot: {
    paddingRight: lrPadding,
    paddingLeft: lrPadding,
    paddingTop: 8,
  },
  rightSlot: {
    paddingRight: lrPadding
  }
})