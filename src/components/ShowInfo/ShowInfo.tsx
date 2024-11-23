import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { getShow } from "../../api/shows.api";
import "./ShowInfo.css";
import showInfoReducer, { ShowInfoState } from "../../reducers/ShowInfoReducer";

const initialState: ShowInfoState = {
  showInfo: {
    image: {
      medium: "",
    },
    name: "",
    type: "",
    language: "",
    premiered: "",
    summary: "", 
  },
};

const ShowInfo = () => {
  const { id } = useParams<{ id: string }>();

  const [state, dispatch] = useReducer(showInfoReducer, initialState);

  useEffect(() => {
    const fetchShowInfo = async () => {
      if (id) {
        const response = await getShow(id);

        if(response) {
            dispatch({type: 'SHOW_INFO', payload: response});
        }
      }
    };
    fetchShowInfo();
  }, [id]);

  return (
    <div className="show_info_block">
      <img
        src={state.showInfo.image.medium}
        alt="show-image"
        className="show_image"
      />
      <div className="show_wrap">
        <h2>{state.showInfo.name}</h2>
        <p>Type: {state.showInfo.type}</p>
        <p>Languege: {state.showInfo.language}</p>
        <p>Premiered: {state.showInfo.premiered}</p>
        <p>{state.showInfo.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      </div>
    </div>
  );
};

export default ShowInfo;