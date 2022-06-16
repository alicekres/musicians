import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './index.module.css';

const SongLyrics = ({ initialTitle, initialArtist }) => {
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const [searchArtist, setSearchArtist] = useState(initialArtist);
    const [searchTitle, setSearchTitle] = useState(initialTitle);
    const [songLyrics, setSongLyrics] = useState('');

    const fetchSongs = async (searchArtist, searchTitle) => {
        const url = `https://api.lyrics.ovh/v1/${
            searchArtist ? searchArtist : initialArtist
        }/${searchTitle ? searchTitle : initialTitle}`;
        console.log(url);
        const { data } = await axios.get(url);
        console.log(data);
        setSongLyrics(data.lyrics);
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    const onArtistChange = (e) => {
        setArtist(e.target.value);
    };

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        fetchSongs(artist, title);
        setSearchArtist(artist);
        setSearchTitle(title);
        setArtist('');
        setTitle('');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div>
                    <h1>Let's sing together!</h1>
                    <p>Find your song and sing along!</p>
                    <p>
                        Look for song lyrics that you want by typing in the
                        artist's name and the title of the song. For example:
                        Artist: Shakira; Title: Hips don't lie
                    </p>
                </div>
                <div className={styles.container}>
                    <form onSubmit={onFormSubmit} className={styles.form}>
                        <label htmlFor="artist">Artist</label>
                        <input
                            type="text"
                            id="artist"
                            value={artist}
                            onChange={onArtistChange}
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={onTitleChange}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className={styles.songSection}>
                    <h3>{searchTitle ? searchTitle : initialTitle}</h3>
                    <h5>{searchArtist ? searchArtist : initialArtist}</h5>
                    <div className={styles.songLyrics}>{songLyrics}</div>
                </div>
            </div>
        </>
    );
};

export default SongLyrics;
