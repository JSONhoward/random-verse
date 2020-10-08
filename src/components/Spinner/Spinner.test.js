import React from 'react'
import {create} from 'react-test-renderer'
import Spinner from './Spinner'

describe('Spinner Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Spinner />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})