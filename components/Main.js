import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import SingleCreature from './SingleCreature'

const Main = props => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true}>
      {props.creatures.map(creature => {
        return (<SingleCreature
          key={creature.id}
          creatureId={creature.id}
          singleCreature={creature}
        />)
      })}
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    creatures: state.creatures,
  }
}

export default connect(mapStateToProps)(Main)
