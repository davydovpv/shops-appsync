import React from 'react'
import {
  View, Text, StyleSheet, Button
} from 'react-native'
import { Fab, Icon } from 'native-base'
import { Auth } from 'aws-amplify'

import ShopList from './shop/ShopList'

import { CustomStyles, ColorPalette } from '../styles'

class Home extends React.Component{
  goToUpsertShop = () => {
    this.props.navigation.navigate("UpsertShop")
  }

  render() {
    return (
      <View style={styles.container}>
        <ShopList {...this.props} />
        <Fab
          style={styles.addBtn}
          onPress={this.goToUpsertShop}
        >
          <Icon name="add" type="MaterialIcons" />
        </Fab>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: CustomStyles.spaceBetweenCont,
  addBtn: {
    backgroundColor: ColorPalette.violet
  }
})

export default (Home);
