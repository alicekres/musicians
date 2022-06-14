import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Surprise = () => {
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const [songLyrics, setSongLyrics] = useState('');

    const fetchSongs = async (searchArtist, searchTitle) => {
        const url = `https://api.lyrics.ovh/v1/${searchArtist}/${searchTitle}`;
        console.log(url);
        const { data } = await axios.get(url);
        console.log(data);
        setSongLyrics(data.lyrics);
    };

    useEffect(() => {
        fetchSongs('coldplay', 'Adventure of a Lifetime');
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
    };
    return (
        <>
            <div>{songLyrics}</div>
            <form onSubmit={onFormSubmit}>
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
        </>
    );
};

export default Surprise;
