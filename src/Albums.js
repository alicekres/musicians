import React from 'react';

const Albums = () => {
    const sandraAlbums = [
        { album: 'If I Stand', releaseDate: 2004 },
        { album: 'Treasure', releaseDate: 2007 },
        { album: 'More Than Anything', releaseDate: 2015 },
    ];
    const daynaSongs = [
        { song: 'Bright New Wave COVER', releaseDate: 2020 },
        { song: 'It Was Me - LIVE - Kevin Petrie Original', releaseDate: 2021 },
        {
            song: 'I Cannot Tell Why - Arrangement by David Downes for Celtic Woman (O Danny Boy) - Neumann TLM 103 Mic',
            releaseDate: 2021,
        },
    ];
    const helleviSongs = [
        { song: 'My tower', releaseDate: 2012 },
        { song: 'Brand new day', releaseDate: 2012 },
        { song: 'Time flow', releaseDate: 2013 },
    ];
    return (
        <>
            <div>
                Sandra Entermann's albums:
                {sandraAlbums &&
                    sandraAlbums.map((album) => {
                        return (
                            <>
                                <div>Album: {album.album}</div>
                                <div>Release date: {album.releaseDate}</div>
                            </>
                        );
                    })}
            </div>
            <div>
                Dayna Petrie's songs:
                {daynaSongs &&
                    daynaSongs.map((song) => {
                        return (
                            <>
                                <div>Song name: {song.song}</div>
                                <div>Release date: {song.releaseDate}</div>
                            </>
                        );
                    })}
            </div>
            <div>
                Hellevi Nõmmik songs:
                {helleviSongs &&
                    helleviSongs.map((song) => {
                        return (
                            <>
                                <div>Song name: {song.song}</div>
                                <div>Release date: {song.releaseDate}</div>
                            </>
                        );
                    })}
            </div>
        </>
    );
};

export default Albums;
