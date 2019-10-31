import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addNaming } from '../redux/creatures'
import Polaroid from './Polaroid'
import Namings from './Namings'

const dummyData = {
  currentUser: '1909-CH',
};

const SingleCreature = props => {
  // State - Redux
  const creature = props.creatures
    .filter(creature => creature.id === props.creatureId)[0]
  const namings = creature.namings;
  const currentUser = dummyData.currentUser;

  // State - Local
  const [nameEntry, setNameEntry] = useState('');
  const [myNaming, setName] = useState(
    namings
      .filter(naming => naming.namedBy === currentUser)
      .length > 0 ? (
        namings.filter(n => n.namedBy === currentUser)[0].name
      ) : ('')
  );

  // Handlers
  const changeNameInputHandler = text => {
    setNameEntry(text);
  };

  const changeNameButtonHandler = () => {
    setName(nameEntry);
    props.addNamingRedux(creature.id, nameEntry, currentUser)
  };

  return (
    <View style={styles.root}>
      <Polaroid creature={creature} myNaming={myNaming} />
      {myNaming ? (
        <Namings namings={namings} />
      ) : (
        <View style={styles.nameEntryCard}>
          <TextInput
            placeholder="try writing a name ✍"
            style={[
              styles.creatureViewChild,
              {
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                margin: 10,
                width: 220,
                textAlign: 'center',
              }
            ]}
            onChangeText={changeNameInputHandler}
            value={nameEntry}
          />
          <Button
            title="SUBMIT"
            style={{ padding: 10 }}
            onPress={changeNameButtonHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  creatureView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  nameEntryCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creatureViewChild: {
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    creatures: state.creatures,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNamingRedux: (creatureId, name, namedBy) => dispatch(addNaming(creatureId, name, namedBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCreature);
