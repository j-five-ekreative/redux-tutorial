import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, SongDetails, Songs } from './pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/songs/:id' element={<SongDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
