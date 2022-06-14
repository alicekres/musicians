import Surprise from './components/Surprise';
import Albums from './components/Album';
import Artists from './components/Artist';
import Greeting from './components/Greeting';

function App() {
    return (
        <main>
            <Greeting />
            <Artists />
            <Albums />
            <Surprise />
        </main>
    );
}

export default App;
