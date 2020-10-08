import React from 'react'
import {create} from 'react-test-renderer'
import { initialState, StateContext } from '../../store/state'
import {reducer} from '../../store/reducer'
import Dropdown from './Dropdown'

describe('Dropdown Tests', () => {
    test('Snapshot Test', () => {
        const Component = () => {
            const [state, dispatch] = React.useReducer(reducer, initialState)
            return(
                <StateContext.Provider value={[state, dispatch]}>
                <Dropdown />
                </StateContext.Provider>
            )
        }

        const tree = create(<Component />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})