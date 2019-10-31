import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import SingleNaming from './SingleNaming'

const Namings = props => {
  const namings = props.namings

  return (
    <View style={styles.namingsView}>
      <Text style={{ padding: 5 }}>Some other great names (yours is in there somewhere!):</Text>
      <ScrollView>
        {
          namings
            .sort((a, b) => a.name < b.name)
            .sort((a, b) => a.votes < b.votes)
            .map(naming => {
              return (
                <SingleNaming
                  key={naming.id}
                  naming={naming}
                />
              )
            })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  namingsView: {
    flex: 1,
    padding: 3,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  }
});

export default Namings
