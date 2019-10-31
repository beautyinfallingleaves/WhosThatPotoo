import React from 'react';
import { connect } from 'react-redux'
import { upvote, downvote } from '../redux/creatures'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const SingleNaming = props => {
  const naming = props.naming

  const handleUpvote = () => {
    props.upvoteRedux(naming.id)
  }

  const handleDownvote = () => {
    props.downvoteRedux(naming.id)
  }

  return (
    <View style={styles.namingView}>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>
          {naming.name}
        </Text> by {naming.namedBy}
        <Text
          style={{
            fontSize: 10,
            color: 'gray'
          }}
        > ({naming.votes} votes)
        </Text>
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={handleUpvote}
          style={{ padding: 10 }}
        >
          <FontAwesomeIcon
            icon={ faCaretUp }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDownvote}
          style={{ padding: 10 }}
        >
          <FontAwesomeIcon
            icon={ faCaretDown }
          />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  namingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  }
})

const mapStateToProps = state => {
  return {
    creatures: state.creatures,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteRedux: namingId => dispatch(upvote(namingId)),
    downvoteRedux: namingId => dispatch(downvote(namingId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleNaming)
