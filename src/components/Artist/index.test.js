import { screen } from '@testing-library/react';

import Artists from './index';

describe('Artists', () => {
    beforeEach(() => render(<Artists />));

    test('the first rendered artist has a name attribute with the value Sandra Entermann', () => {
        const artist = screen.getAllByRole('artistname')[0];
        expect(artist.textContent).toContain('Sandra Entermann');
    });

    test('the second rendered artist has a name attribute with the value of Dayna Petrie', () => {
        const artist = screen.getAllByRole('artistname')[1];
        expect(artist.textContent).toContain('Dayna Petrie');
    });
});
