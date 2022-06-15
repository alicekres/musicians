import { Routes, Route } from 'react-router-dom';

import { Header } from './layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Album from './pages/Album';
import SongLyrics from './pages/SongLyrics';
import NoPage from './pages/NoPage.js';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/songlyrics" element={<SongLyrics />} />
                <Route path="/albums" element={<Album />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default App;
