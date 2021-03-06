import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(rtl.cleanup)

test('App renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
})

