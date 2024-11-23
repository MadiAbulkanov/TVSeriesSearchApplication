import { ShowsName } from "../api/shows.api";

type SeriesSearchState = {
    searchTerm: string;
    showName: ShowsName[];
};

type SeriesSearchAction = { type: 'SEARCH_TERM'; payload: string } | { type: 'SHOWS_NAME'; payload: ShowsName[] };

const seriesSearchReducer = (state: SeriesSearchState, action: SeriesSearchAction): SeriesSearchState => {
    switch (action.type) {
        case 'SEARCH_TERM':
            return { ...state, searchTerm: action.payload };
        case 'SHOWS_NAME':
            return { ...state, showName: action.payload };
        default:
            return state;
    }
};

export default seriesSearchReducer;