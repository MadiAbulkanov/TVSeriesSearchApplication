
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SeriesSearch from './container/SeriesSearch/SeriesSearch';
import ShowInfo from './components/ShowInfo/ShowInfo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SeriesSearch />}>
          <Route path='/shows/:id' element={<ShowInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;