import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Players';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(rtl.cleanup)

test('App renders Players component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player />, div)
})