import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './index.module.css';
import Counter from '../../components/Counter';

const Album = () => {
    const sandraAlbums = [
        { album: 'If I Stand', releaseDate: 2004, id: 1 },
        { album: 'Treasure', releaseDate: 2007, id: 2 },
        { album: 'More Than Anything', releaseDate: 2015, id: 3 },
    ];
    const daynaSongs = [
        { song: 'Bright New Wave COVER', releaseDate: 2020, id: 1 },
        {
            song: 'It Was Me - LIVE - Kevin Petrie Original',
            releaseDate: 2021,
            id: 2,
        },
        {
            song: 'I Cannot Tell Why - Arrangement by David Downes for Celtic Woman (O Danny Boy) - Neumann TLM 103 Mic',
            releaseDate: 2021,
            id: 3,
        },
    ];
    const helleviSongs = [
        { song: 'My tower', releaseDate: 2012, id: 1 },
        { song: 'Brand new day', releaseDate: 2012, id: 2 },
        { song: 'Time flow', releaseDate: 2013, id: 3 },
    ];
    return (
        <>
            <div className="container vh-90">
                <div className="d-flex justify-content-between">
                    <div className={styles.albumCard}>
                        Sandra Entermann's albums:
                        {sandraAlbums &&
                            sandraAlbums.map((album) => {
                                return (
                                    <React.Fragment key={album.id}>
                                        <div>Album: {album.album}</div>
                                        <div>
                                            Release date: {album.releaseDate}
                                        </div>

                                        <Counter />
                                    </React.Fragment>
                                );
                            })}
                    </div>
                    <div className={styles.albumCard}>
                        Dayna Petrie's songs:
                        {daynaSongs &&
                            daynaSongs.map((song) => {
                                return (
                                    <React.Fragment key={song.id}>
                                        <div>Song name: {song.song}</div>
                                        <div>
                                            Release date: {song.releaseDate}
                                        </div>

                                        <Counter />
                                    </React.Fragment>
                                );
                            })}
                    </div>
                    <div className={styles.albumCard}>
                        Hellevi Nõmmik songs:
                        {helleviSongs &&
                            helleviSongs.map((song) => {
                                return (
                                    <React.Fragment key={song.id}>
                                        <div>Song name: {song.song}</div>
                                        <div>
                                            Release date: {song.releaseDate}
                                        </div>

                                        <Counter />
                                    </React.Fragment>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Album;
