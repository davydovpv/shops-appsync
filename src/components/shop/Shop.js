import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import { Fab, Icon } from 'native-base'
import { ColorPalette, CustomStyles } from '../../styles'

class Shop extends React.Component{
  editShop = () => {
    const { navigation } = this.props
    navigation.navigate("UpsertShop", navigation.state.params)
  }

  render() {
    const {name, description} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.nameCont}>
            <Text>{name}</Text>
          </View>
          <View style={styles.descCont}>
            <Text style={styles.desc}>{description}</Text>
          </View>
        </View>
        <View>
          <Fab onPress={this.editShop} style={styles.editBtn}>
            <Icon name="edit" type="MaterialIcons" />
          </Fab>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    ...CustomStyles.spaceBetweenCont
  },
  nameCont: {
    padding: 10,
    borderBottomColor: ColorPalette.violet,
    borderBottomWidth: 1
  },
  name: {
    fontSize: 30,
  },
  descCont: {
    padding: 10
  },
  desc: {
    fontStyle: 'italic',
  },
  editBtn: {
    backgroundColor: ColorPalette.violet
  }
})

export default (Shop);
