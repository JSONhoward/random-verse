import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer, {GITHUBLINK} from './Footer'

describe('Footer Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Footer />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Renders Github link', () => {
        render(<Footer />)

        expect(screen.getByTestId('githubLink')).toHaveAttribute('href', GITHUBLINK)
    })
})

