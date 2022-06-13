import React from 'react';

const Artists = () => {
    const artists = [
        {
            name: 'Sandra Entermann',
            musicType: 'christian hymns',
            background:
                'As the youngest of six, her formative years were spent immersed in an environment rich in musical expression. Prenatally, she spent many hours at the piano as her mother played soothing lullabies. Deprived of television, her early childhood saw many more hours sitting in front of the HMV as her family wore out their collection of vinyl LPs. The Classical Masters, Big Band, Orchestral and Choral works – even Country – and, of course, Gospel.',
        },
        {
            name: 'Dayna Petrie',
            musicType: 'contemporary christian',
            background:
                'Dayna was raised in a Seventh-day Adventist home and schooling system, but had to change schools to one that was filled with drugs, alcohol, self harm during class, depression, hurt and brokenness. She found herself living a double life in order to be liked and to find friends. The family moved to Australia to a new job for her mother. This encouraged Dayna profoundly to pursuit God more seriously. And she has been singing for the glory to God since then.',
        },
        {
            name: 'Hellevi Nõmmik',
            musicType: 'gospel',
            background:
                'Hellevi was born and raised in Estonia. However, since early age their family was travelling around and for a long time she found herself living in USA as well as in England. At the moment Hellevi has found her place in Scotland, is married and has 2 beautiful children',
        },
    ];
    return (
        artists &&
        artists.map((artist) => {
            return (
                <>
                    <div>Artist: {artist.name}</div>
                    <div>Music type: {artist.musicType}</div>
                    <div>Background: {artist.background}</div>
                </>
            );
        })
    );
};

export default Artists;
