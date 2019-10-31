import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisH, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

const Title = () => {
  return (
    <View style={styles.headerContainer}>
      <FontAwesomeIcon icon={ faCameraRetro } style={{ padding: 10 }} />
      <Text style={styles.headerText}>WHO'S THAT POTOO?</Text>
      <FontAwesomeIcon icon={ faEllipsisH } style={{ padding: 10 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2.5 },
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingHorizontal: 12,
  },
  headerText: {

    fontSize: 24,
    padding: 7,
  },
})

export default Title
