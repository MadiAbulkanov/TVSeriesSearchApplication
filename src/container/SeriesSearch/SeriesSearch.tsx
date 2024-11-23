import { useEffect, useReducer } from 'react';
import Header from '../../components/Header/Header';
import './SeriesSearch.css';
import { Outlet, useNavigate } from 'react-router-dom';
import seriesSearchReducer from '../../reducers/SeriesSearchReducer';
import useDebounce from '../../Debounce/Debounce';
import { getShowsName } from '../../api/shows.api';

const SeriesSearch = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(seriesSearchReducer, {searchTerm: '', showName: []});
    const debouncedSearchTerm = useDebounce(state.searchTerm, 500);

    useEffect(() => {
      if (debouncedSearchTerm) {
        fetchShows();
      }
    }, [debouncedSearchTerm]);

    const fetchShows = async () => {
      const response = await getShowsName(state.searchTerm);
      dispatch({type: 'SHOWS_NAME', payload: response});
    };

    const inputClick = async (id: string) => {
      dispatch({type: 'SHOWS_NAME', payload: []});
      dispatch({type: 'SEARCH_TERM', payload: ''});
 
      navigate(`/shows/${id}`);
    };

  return (
    <div>
      <Header />
        <div className='container'>
          <div className='input_block'>
            <p className='search'>Search for TV Show:</p>
            <input type="text" className='input_search' value={state.searchTerm} onChange={(e) => dispatch({type: 'SEARCH_TERM', payload: e.target.value})} />
          </div>
          <ul className='show_names'>
          {state.showName && state.showName.map((show) => ( 
            <li key={show.show.id} className='name' onClick={() => inputClick(show.show.id)}>{show.show.name}</li>
          ))}
          </ul>   
        </div>
       <Outlet/>
    </div>
  )
};

export default SeriesSearch;