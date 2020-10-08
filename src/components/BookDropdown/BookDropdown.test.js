import React from 'react'
import { create } from 'react-test-renderer'
import BookDropdown from './BookDropdown'
import { initialState, StateContext } from '../../store/state'
import { reducer } from '../../store/reducer'

describe('BookDropdown Tests', () => {
    test('Snapshot Test', () => {
        const Component = () => {
            const [state, dispatch] = React.useReducer(reducer, initialState)
            return (
                <StateContext.Provider value={[state, dispatch]}>
                    <BookDropdown />
                </StateContext.Provider>
            )
        }
        const tree = create(<Component />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})