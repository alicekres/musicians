import React from 'react';
import { screen } from '@testing-library/react';

import Greeting from './index';

describe('Greeting', () => {
    beforeEach(() => render(<Greeting />));

    // test('when you type in Alice, the greeting contains the name Alice', () => {
    //     const greeting = screen.getByLabelText('greeting');
    //     const input = screen.getByRole('input');
    //     fireEvent.type(input, 'Alice', { enter });
    //     expect(greeting.textContent).toContain('Alice');
    // });

    // test('clears user input after submission', () => {
    //     const input = screen.getByRole('input');
    //     userEvent.type(input, 'Alice{enter}');
    //     expect(input.value).toBe('');
    // });
});
