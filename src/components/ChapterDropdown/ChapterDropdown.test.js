import React from 'react'
import {create} from 'react-test-renderer'
import { initialState, StateContext } from '../../store/state'
import {reducer} from '../../store/reducer'
import ChapterDropdown from './ChapterDropdown'

describe('ChapterDropdown Tests', () => {
    test('Snapshot Test', () => {
        const Component = () => {
            const [state, dispatch] = React.useReducer(reducer, initialState)
            return(
                <StateContext.Provider value={[state, dispatch]}>
                    <ChapterDropdown />
                </StateContext.Provider>
            )
        }

        const tree = create(<Component />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})