/* eslint-disable no-case-declarations */

const dummyData = [
  {
    id: 1,
    species: 'potoo',
    imageUrl: 'https://imgix.ranker.com/user_node_img/50069/1001379047/original/the-potoo-bird-isn_t-a-single-species-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
    photoCred: 'Photographer Stan',
    namings: [
      {
        id: 1,
        name: 'Chirpturde',
        namedBy: 'Finn',
        votes: 1251792
      },
      {
        id: 2,
        name: 'Lord Regent Cumberland',
        namedBy: 'Wendy',
        votes: 912526
      },
      {
        id: 3,
        name: 'Bisquick',
        namedBy: 'Andy',
        votes: 842612
      },
      {
        id: 4,
        name: 'Little Orphan Tim',
        namedBy: 'Svetlana',
        votes: 799523
      },
      {
        id: 5,
        name: 'Drumstick',
        namedBy: 'Ted',
        votes: 654772
      },
      {
        id: 6,
        name: 'Bob Ross',
        namedBy: 'Jenny',
        votes: 2
      },
      {
        id: 7,
        name: 'Glorfindel',
        namedBy: 'Tolkien',
        votes: 11792
      },
      {
        id: 8,
        name: 'Aslan',
        namedBy: 'Lewis',
        votes: 9126
      },
      {
        id: 9,
        name: 'Sad Boi',
        namedBy: 'Trish',
        votes: 842612
      },
      {
        id: 10,
        name: 'Little Orphan Zim',
        namedBy: 'Invader Z',
        votes: 799522
      },
      {
        id: 11,
        name: 'Blowfish',
        namedBy: 'Hootie',
        votes: 654772
      },
      {
        id: 12,
        name: 'Allen',
        namedBy: 'Allen',
        votes: 2
      },
    ]
  },
  {
    id: 2,
    species: 'hedgehog',
    imageUrl: 'https://i.pinimg.com/originals/8c/aa/32/8caa32a5573196205080a93fc275dfff.jpg',
    photoCred: 'Photographer Dan',
    namings: [
      {
        id: 10,
        name: 'Pointdexter',
        namedBy: 'Manish',
        votes: 3
      },
      {
        id: 11,
        name: 'Chronic the Hedgehog',
        namedBy: 'Mr. Dogg',
        votes: 5021883
      },
    ]
  },
  {
    id: 3,
    species: 'sugar glider',
    imageUrl: 'https://savagefacts.com/wp-content/uploads/2018/10/flying-squirrel.jpg',
    photoCred: 'Photographer Jen',
    namings: [
      {
        id: 20,
        name: 'Winglet',
        namedBy: 'Rolli Polli',
        votes: 2
      },
      {
        id: 21,
        name: 'Sky Rug',
        namedBy: 'Wendy',
        votes: 1
      },
    ]
  },
]

let dummyNamingId = 1000

const initialState = dummyData

// ****** ACTION TYPES ******
const SET_CREATURES = 'SET_CREATURES'
const ADD_NAMING = 'ADD_NAMING'
const UPVOTE = 'UPVOTE'
const DOWNVOTE = 'DOWNVOTE'

// ****** ACTION CREATORS ******
export const setCreatures = creatures => ({
  type: SET_CREATURES,
  creatures,
})

export const addNaming = (creatureId, name, namedBy) => ({
  type: ADD_NAMING,
  creatureId,
  name,
  namedBy,
})

export const upvote = (namingId) => ({
  type: UPVOTE,
  namingId,
})

export const downvote = (namingId) => ({
  type: DOWNVOTE,
  namingId,
})

// ****** REDUCER ******
const creatures = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATURES:
      return action.creatures
    case ADD_NAMING:
      const updatedCreatures = state
        .map(creature => {
          if (creature.id === action.creatureId) {
            const updatedNamings = [
              ...creature.namings,
              {
                id: ++dummyNamingId,
                name: action.name,
                namedBy: action.namedBy,
                votes: 0
              },
            ]

            creature.namings = updatedNamings
          }
          return creature
        })
      return updatedCreatures
    case UPVOTE:
      const upvotedCreatures = state
        .map(creature => {
          creature.namings = creature.namings
            .map(naming => {
              naming.votes = naming.id === action.namingId ? (
                naming.votes + 1
              ) : (
                naming.votes
              )
              return naming
            })
          return creature
        })
      return upvotedCreatures
    case DOWNVOTE:
        const downvotedCreatures = state
          .map(creature => {
            creature.namings = creature.namings
              .map(naming => {
                naming.votes = naming.id === action.namingId ? (
                  naming.votes - 1
                ) : (
                  naming.votes
                )
                return naming
              })
            return creature
          })
        return downvotedCreatures
    default:
      return state
  }
}

export default creatures
