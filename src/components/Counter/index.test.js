import { screen } from '@testing-library/react';
import Counter from '.';

describe('Counter', () => {
    beforeEach(() => render(<Counter />));

    test('it loads with a counter at 0', () => {
        const counter = screen.getByRole('figure');
        expect(counter.textContent).toBe('Count: 0');
    });

    test('clicking the addButton increases the button by 1', () => {
        const counter = screen.getByRole('figure');
        const button = screen.getByRole('button', { name: 'Like' });
        fireEvent.click(button);
        expect(counter.textContent).toBe('Count: 1');
    });

    test('clicking the removeButton twice leaves the counter value at 0', () => {
        const counter = screen.getByRole('figure');
        const button = screen.getByRole('button', { name: 'Dislike' });
        fireEvent.click(button);
        fireEvent.click(button);
        expect(counter.textContent).toBe('Count: 0');
    });

    test('clicking the removeButton twice where the counter starting point is 5 leaves the value at 3', () => {
        const counter = screen.getByRole('figure');
        const addButton = screen.getByRole('button', { name: 'Like' });
        const removeButton = screen.getByRole('button', { name: 'Dislike' });
        fireEvent.click(addButton);
        fireEvent.click(addButton);
        fireEvent.click(addButton);
        fireEvent.click(addButton);
        fireEvent.click(addButton);

        fireEvent.click(removeButton);
        fireEvent.click(removeButton);
        expect(counter.textContent).toBe('Count: 3');
    });
});
