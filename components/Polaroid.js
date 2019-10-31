import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Polaroid = props => {
  const { creature, myNaming } = props

  return (
    <View style={styles.polaroid}>
      <View style={styles.polaroidImageContainer}>
        <Image
          source={{ uri: creature.imageUrl }}
          resizeMode='cover'
          style={{
              width: '100%',
              flex: 1,
              padding: 10,
            }}
        />
      </View>
      <View style={styles.polaroidNameContainer}>
        {myNaming ? (
          <Text style={{ fontSize: 24 }}>😻 {myNaming} 😻</Text>
        ) : (
          <Text>🙀 This {creature.species} needs a name! 🙀</Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  polaroid: {
    width: '90%',
    height: 395,
    marginVertical: 20,
    shadowColor: 'gray',
    shadowOpacity: 0.75,
    shadowOffset: { width: 5, height: 5 },
    backgroundColor: 'white',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  polaroidImageContainer: {
    width: '100%',
    height: 325,
  },
  polaroidNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Polaroid
